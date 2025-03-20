import mysql, {Pool, PoolConnection} from 'mysql2/promise';
import { config } from 'dotenv';
import path from 'path';
config({path: path.resolve("..", "./server/.env")});


class DB {
  private pool: Pool | null = null;
  constructor() {
    this.init();
  }
  /**
   * @初始化
   */
  public init() {
    try{
      this.pool = mysql.createPool({
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'root',
        database: process.env.MYSQL_DATABASE || 'lottery',
        waitForConnections: true,
        connectionLimit: 50,
        queueLimit: 0
      });
    }
    catch(e) {
      console.log(`[数据库未连接成功]`, e)
    }
  }
  /**
   * @获取连接状态
   */
  public async getConnectionStatus() {
    const connect = await this.pool?.getConnection().catch(()=>{
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
  public async query(sql: string) {
    if(!await this.pool?.getConnection()) return;
    const connection = await this.pool!.getConnection();
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
  public async execute(sql: string) {
    if(!await this.pool?.getConnection()) return;
    const connection = await this.pool!.getConnection();
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
  public async close() {
    if(!await this.pool?.getConnection()) return;
    this.pool?.destroy();
  }
  /**
   * @获得对象池
   * @returns @type {Pool}
   */
  public getPool() {
    return this.pool;
  }
}

export default new DB();