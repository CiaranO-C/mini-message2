import { configDotenv } from "dotenv";
import pg from "pg";
configDotenv();

const pool = new pg.Pool({
  connectionString: process.env.POOL_STRING
});



export { pool };
