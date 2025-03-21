"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const db_1 = __importDefault(require("./db"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
let curData = {};
let errorData = [];
let defaultType = config_1.default.prizes[0]["type"];
let defaultPage = `default data`;
let luckyData = {};
const { loadXML, loadTempData, writeXML, saveDataFile, shuffle, saveErrorDataFile } = require("./help");
function log(text) {
    global.console.log(text);
    global.console.log("-----------------------------------------------");
}
/**
 *
 * @param type
 * @param data
 * @returns
 */
function setLucky(type, data) {
    if (luckyData[type]) {
        luckyData[type] = luckyData[type].concat(data);
    }
    else {
        luckyData[type] = Array.isArray(data) ? data : [data];
    }
    return saveDataFile(luckyData);
}
/**
 *
 * @param data
 * @returns
 */
function setErrorData(data) {
    errorData = errorData.concat(data);
    return saveErrorDataFile(errorData);
}
/**
 * @
 */
function getLeftUsers() {
    //  记录当前已抽取的用户
    let lotteredUser = {};
    for (let key in luckyData) {
        let luckys = luckyData[key];
        luckys.forEach(item => {
            lotteredUser[item[0]] = true;
        });
    }
    // 记录当前已抽取但是不在线人员
    errorData.forEach((item) => {
        lotteredUser[item[0]] = true;
    });
    let leftUsers = Object.assign([], curData.users);
    leftUsers = leftUsers.filter(user => {
        return !lotteredUser[user[0]];
    });
    curData.leftUsers = leftUsers;
}
// 获取之前设置的数据
router.post("/login", (req, res, next) => {
    res.json({
        msg: "success",
        login: true,
        token: '',
    });
});
// 获取之前设置的数据
router.post("/getTempData", async (req, res, next) => {
    getLeftUsers();
    if (await db_1.default.getConnectionStatus()) {
        const result = await db_1.default.execute(`select * from ${process.env.PRIZE_TABLE || 'prize'}`);
        curData.users = result;
        config_1.default.EACH_COUNT = result.map((item) => item.count);
        config_1.default.prizes = result;
        console.log(config_1.default.EACH_COUNT);
        res.json({
            cfgData: config_1.default,
            leftUsers: curData.leftUsers,
            luckyData: luckyData
        });
    }
    else {
        res.json({
            cfgData: config_1.default,
            leftUsers: curData.leftUsers,
            luckyData: luckyData
        });
    }
});
// 获取所有用户
router.post("/reset", (req, res, next) => {
    luckyData = {};
    errorData = [];
    log(`重置数据成功`);
    saveErrorDataFile(errorData);
    return saveDataFile(luckyData).then(() => {
        res.json({
            type: "success"
        });
    });
});
// 获取所有用户
router.post("/getUsers", async (req, res, next) => {
    await loadData();
    res.json(curData.users);
    log(`成功返回抽奖用户数据`);
});
// 获取奖品信息
router.post("/getPrizes", (req, res, next) => {
    // res.json(curData.prize);
    log(`成功返回奖品数据`);
});
// 保存抽奖数据
router.post("/saveData", async (req, res, next) => {
    let data = req.body;
    if (Number(process.env.PRIZE_MODE) === 1) {
        const result = await db_1.default.execute(`select * from ${process.env.PRIZE_TABLE || 'prize'} WHERE type = ${data.type}`);
        const userIds = data.data.map((item) => item[0]);
        await db_1.default.execute(`UPDATE ${process.env.USERS_TABLE || 'users'} SET status = 1 , text = "${result[0]?.text}" WHERE openid IN ('${userIds.join("','")}');`);
    }
    setLucky(data.type, data.data)
        .then(t => {
        res.json({
            type: "设置成功！"
        });
        log(`保存奖品数据成功`);
    })
        .catch(data => {
        res.json({
            type: "设置失败！"
        });
        log(`保存奖品数据失败`);
    });
});
// 保存抽奖数据
router.post("/errorData", async (req, res, next) => {
    let data = req.body;
    setErrorData(data.data)
        .then(t => {
        res.json({
            type: "设置成功！"
        });
        log(`保存没来人员数据成功`);
    })
        .catch(data => {
        res.json({
            type: "设置失败！"
        });
        log(`保存没来人员数据失败`);
    });
});
// 保存数据到excel中去
router.post("/export", (req, res, next) => {
    let type = [1, 2, 3, 4, 5, defaultType], outData = [["用户ID", "姓名", "电话"]];
    config_1.default.prizes.forEach(item => {
        outData.push([item.text]);
        outData = outData.concat(luckyData[item.type] || []);
    });
    writeXML(outData, "/抽奖结果.xlsx")
        .then(() => {
        // res.download('/抽奖结果.xlsx');
        res.status(200).json({
            type: "success",
            url: "抽奖结果.xlsx"
        });
        log(`导出数据成功！`);
    })
        .catch((err) => {
        res.json({
            type: "error",
            error: err.error
        });
        log(`导出数据失败！`);
    });
});
//对于匹配不到的路径或者请求，返回默认页面
//区分不同的请求返回不同的页面内容
router.all("*", (req, res) => {
    if (req.method.toLowerCase() === "get") {
        if (/\.(html|htm)/.test(req.originalUrl)) {
            res.set("Content-Type", "text/html");
            res.send(defaultPage);
        }
        else {
            res.status(404).end();
        }
    }
    else if (req.method.toLowerCase() === "post") {
        let postBackData = {
            error: "empty"
        };
        res.send(JSON.stringify(postBackData));
    }
});
/**
 * …………………………………………………………………………………… loaded ………………………………………………………………………………
 */
async function loadData() {
    if (await db_1.default.getConnectionStatus()) {
        console.log("加载MySQL数据");
        let result = [];
        Number(process.env.PRIZE_MODE) === 1 ?
            result = await db_1.default.execute(`SELECT * FROM ${process.env.USERS_TABLE || 'users'} WHERE status = 0`) :
            result = await db_1.default.execute(`SELECT * FROM ${process.env.USERS_TABLE || 'users'}`);
        curData.users = result.map(row => [row.openid, row.name, row.phone]);
        shuffle(curData.users || []);
        loadTempData().then((data) => {
            luckyData = data[0];
            errorData = data[1];
        });
    }
    else {
        console.log("加载Excel数据");
        let cfgData = {};
        curData.users = loadXML(path_1.default.join(path_1.default.resolve(), "..", "server/data/users.xlsx"));
        // 重新洗牌
        shuffle(curData.users);
        // 读取已经抽取的结果
        loadTempData()
            .then((data) => {
            luckyData = data[0];
            errorData = data[1];
        })
            .catch(() => {
            curData.leftUsers = Object.assign([], curData.users);
        });
    }
}
exports.default = router;
