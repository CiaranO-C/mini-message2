import { pool } from "./pool.js";

async function getAllMessages() {
  const res = await pool.query(`SELECT * FROM messages;`);
  return res.rows;
}

async function findMessage(id){
    const res = await pool.query(`SELECT * FROM messages WHERE id = $1`, [id]);
    return res.rows[0];
}

async function sendMessage({username, message}){
    const res = await pool.query('INSERT INTO messages(username, text) VALUES ($1, $2)', [username, message]);
    console.log(res.rowCount)
}

export { getAllMessages, findMessage, sendMessage };
