import pg from 'pg';
const { Pool } = pg

const pool = new Pool({
  user: "mark",
  password: "1324",
  host: "localhost",
  port: "5432",
  database: "node_pos"
})

export default pool