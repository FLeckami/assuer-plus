import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "gfloch",
  password: "geogeo28",
  database: "assuer_plus",
  connectTimeout: 5000
});

console.log('Connected to MariaDB');

export default connection;