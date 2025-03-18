// 如果你后续会使用fs模块，可以保留导入语句，若不使用则可删除
import * as fs from 'fs';
// 测试抽奖结果数据的正确性
var selected = {},
  repeat: any[] = [],
  luckyData = require("/Users/xiechang/Documents/project/抽奖/product/dist/temp.json"),
  errorData = require("/Users/xiechang/Documents/project/抽奖/product/dist/error.json");

for (let key in luckyData) {
  let item = luckyData[key];
  item.forEach((user: [string, any]) => {
    let id = user[0];
    if ((selected as Record<string, boolean>)[id]) {
      repeat.push(user[1]);
      return;
    }
    (selected as Record<string, boolean>)[id] = true;
  });
}

// 假设 user 是一个数组，第一个元素是 string 类型，第二个元素是 any 类型
errorData.forEach((user: [string, any]) => {
  let id = user[0];
  if ((selected as Record<string, boolean>)[id]) {
    repeat.push(user[1]);
    return;
  }
  (selected as Record<string, boolean>)[id] = true;
});

if (repeat.length > 0) {
  console.log(repeat);
  // 删除不合法的 return 语句
}
console.log("没有重复选项");
