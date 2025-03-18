const fs = require("fs");
const path = require("path");
const xlsx = require("node-xlsx").default;
let cwd = path.join(__dirname, "cache");

if (!fs.existsSync(cwd)) {
  fs.mkdirSync(cwd);
}

/**
 * 读取缓存的数据内容
 */
async function loadTempData(): Promise<any> {
  let pros = [];
  pros.push(
    new Promise((resolve, reject) => {
      fs.readFile(path.join(cwd, "temp.json"), "utf8", (err: any, data: any) => {
        if (err) {
          resolve({});
          return;
        }
        resolve(JSON.parse(data));
      });
    })
  );

  pros.push(
    new Promise((resolve, reject) => {
      fs.readFile(path.join(cwd, "error.json"), "utf8", (err: any, data: any) => {
        if (err) {
          resolve([]);
          return;
        }
        resolve(JSON.parse(data));
      });
    })
  );

  return Promise.all(pros);
}

/**
 * 读取XML文件数据
 */
function loadXML(xmlPath: string) {
  let userData = xlsx.parse(xmlPath) as any[];
  let outData = [] as any[];
  userData.forEach(item => {
    outData = item.data;
    outData.shift();
    return false;
  });
  outData = outData.filter(item => item.length > 0);
  return outData;
}

/**
 * 写入excel
 * @param {Object} data
 * @param {string} name
 */
function writeXML(data: Object, name: string) {
  console.log('writeXML', data)
  let buffer = xlsx.build([
    {
      name: "抽奖结果",
      data: data
    }
  ]);

  return new Promise<void>((resolve, reject) => {
    fs.writeFile(path.join(process.cwd(), name), buffer, (err: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

/**
 * 写入文件
 * @param {*} data
 */
function saveDataFile(data: string) {
  data = JSON.stringify(data, null, 2);
  console.log('data', data)

  if (!fs.existsSync(cwd)) {
    fs.mkdirSync(cwd);
  }

  return new Promise<void>((resolve, reject) => {
    fs.writeFile(path.join(cwd, "temp.json"), data, (err: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
      console.log("数据写入成功");
    });
  });
}

/**
 * 错误日志文件输出
 * @param {*} data
 */
function saveErrorDataFile(data: string) {
  data = JSON.stringify(data, null, 2);
  if (!fs.existsSync(cwd)) {
    fs.mkdirSync(cwd);
  }

  return new Promise<void>((resolve, reject) => {
    fs.writeFile(path.join(cwd, "error.json"), data, (err: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
      console.log("数据写入成功");
    });
  });
}

/**
 * 洗牌算法
 * @param {*} arr
 */
function shuffle(arr: any[]) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
}

module.exports = {
  loadTempData,
  loadXML,
  shuffle,
  writeXML,
  saveDataFile,
  saveErrorDataFile
};
