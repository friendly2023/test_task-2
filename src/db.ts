const { Pool } = require('pg');

export const pool:any = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'users_with_problems',
    password: '9Km6BSkt',
    port: 5432
});

