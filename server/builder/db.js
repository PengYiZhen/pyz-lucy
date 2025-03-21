"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
(0, dotenv_1.config)({ path: path_1.default.resolve("..", "./server/.env") });
class DB {
    pool = null;
    constructor() {
        this.init();
    }
    /**
     * @初始化
     */
    init() {
        try {
            this.pool = promise_1.default.createPool({
                host: process.env.MYSQL_HOST || 'localhost',
                user: process.env.MYSQL_USER || 'root',
                password: process.env.MYSQL_PASSWORD || 'root',
                database: process.env.MYSQL_DATABASE || 'lottery',
                waitForConnections: true,
                connectionLimit: 50,
                queueLimit: 0
            });
        }
        catch (e) {
            console.log(`[数据库未连接成功]`, e);
        }
    }
    /**
     * @获取连接状态
     */
    async getConnectionStatus() {
        const connect = await this.pool?.getConnection().catch(() => {
            return null;
        });
        connect?.release();
        return connect ? true : false;
    }
    /**
     * @查询
     * @param sql
     * @param values
     * @returns
     */
    async query(sql) {
        if (!await this.pool?.getConnection())
            return;
        const connection = await this.pool.getConnection();
        const [result, fieldPacket] = await connection.query(sql);
        connection.release();
        return result;
        // return new Promise((resolve, reject) => {
        //   this.pool!.query(sql, values, (err, results) => {
        //     if (err) return reject(err);
        //     resolve(results);
        //   });
        // });
    }
    /**
     * @查询
     * @param sql
     * @param values
     * @returns
     */
    async execute(sql) {
        if (!await this.pool?.getConnection())
            return;
        const connection = await this.pool.getConnection();
        const [result, fieldPacket] = await connection.execute(sql);
        connection.release();
        return result;
        // return new Promise((resolve, reject) => {
        //   this.pool!.query(sql, values, (err, results) => {
        //     if (err) return reject(err);
        //     resolve(results);
        //   });
        // });
    }
    /**
     * @关闭
     * @returns void
     */
    async close() {
        if (!await this.pool?.getConnection())
            return;
        this.pool?.destroy();
    }
    /**
     * @获得对象池
     * @returns @type {Pool}
     */
    getPool() {
        return this.pool;
    }
}
exports.default = new DB();
