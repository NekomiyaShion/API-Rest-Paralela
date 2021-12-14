import pg from "pg";


const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password:'admin',
    database: 'apiclima',
    port: '4321'
});

export default pool;