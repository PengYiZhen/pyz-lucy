import express from "express";
import bodyParser from "body-parser";
import DB from './db';
import { config } from "dotenv";
import router from "./controller";
config();
const opn = require("opn")


let app = express(),
    cwd = process.cwd(),
    dataBath = __dirname,
    port = 8090,
    luckyData: LuckyData = {},
    errorData: ErrorData = [];

// 这里指定参数使用 json 格式
app.use(
    bodyParser.json({
        limit: "1mb"
    })
);

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
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

app.use(express.static(cwd));

app.use(router);

export const server = {
    run: function (devPort: number, noOpen: string): void {
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
            let host = (server.address() as any).address;
            let port = (server.address() as any).port;
            global.console.log(`PyzLucy server listenig at http://${host}:${port}`);

            // Close DB connection when server closes
            server.on('close', async () => {
                try {
                    console.log(`服务器关闭`)
                    await DB.close();
                    console.log('Database connection closed');
                } catch (err) {
                    console.error('Error closing database connection:', err);
                }
            });
            openBrowser && opn(`http://127.0.0.1:${port}`);
        });
    }
};