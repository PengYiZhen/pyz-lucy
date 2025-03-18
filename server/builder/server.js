"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./db"));
const dotenv_1 = require("dotenv");
const controller_1 = __importDefault(require("./controller"));
(0, dotenv_1.config)();
const opn = require("opn");
let app = (0, express_1.default)(), cwd = process.cwd(), dataBath = __dirname, port = 8090, luckyData = {}, errorData = [];
// 这里指定参数使用 json 格式
app.use(body_parser_1.default.json({
    limit: "1mb"
}));
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.get("/", (req, res) => {
    res.redirect(301, "index.html");
});
// 设置跨域访问
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.post("*", (req, res, next) => {
    console.log(`请求内容：${JSON.stringify(req.path)}`);
    console.log(`-----------------------------------------------`);
    next();
});
if (process.argv.length > 2) {
    port = Number(process.argv[2]);
}
app.use(express_1.default.static(cwd));
app.use(controller_1.default);
exports.server = {
    run: function (devPort, noOpen) {
        let openBrowser = true;
        if (process.argv.length > 3) {
            if (process.argv[3] && (process.argv[3] + "").toLowerCase() === "n") {
                openBrowser = false;
            }
        }
        if (noOpen) {
            openBrowser = noOpen !== "n";
        }
        if (devPort) {
            port = devPort;
        }
        let server = app.listen(port, async () => {
            let host = server.address().address;
            let port = server.address().port;
            global.console.log(`PyzLucy server listenig at http://${host}:${port}`);
            // Close DB connection when server closes
            server.on('close', async () => {
                try {
                    console.log(`服务器关闭`);
                    await db_1.default.close();
                    console.log('Database connection closed');
                }
                catch (err) {
                    console.error('Error closing database connection:', err);
                }
            });
            openBrowser && opn(`http://127.0.0.1:${port}`);
        });
    }
};
