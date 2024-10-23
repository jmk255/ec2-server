const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');

const port = 80;
app.use(cors());
require('dotenv').config()
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT
});

//mysql 접속해서 데이터 조회
app.get('/api', (req, res) => {
  pool.query('select * from tbl_a', (err, results, fields) => {
  console.log(err);
  console.log(results);
  console.log(fields);
  res.json(results);//json으로 react로 보낸다
  });
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 대기중..`);
});