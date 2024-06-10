const { Pool } = require('pg');

export const pool:any = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ИМЯ БАЗЫ ДАННЫХ',
    password: 'ПАРОЛЬ',
    port: 5432
});

