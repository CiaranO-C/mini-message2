import pg from "pg";
import { configDotenv } from 'dotenv';
configDotenv();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(25),
text TEXT,
added DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages(username, text)
VALUES
('Amando', 'Hi there!'),
('Charles', 'Hello, World!');
`;

async function main() {
  const client = new pg.Client({
    connectionString: process.env.CLIENT_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
