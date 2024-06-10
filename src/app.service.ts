import { Injectable } from '@nestjs/common';
import { pool } from './db';

interface UsersServiceinterface {
  getUsersWithProblems(): Promise<number>,
  getUsersWithoutProblems(): Promise<number>
}

@Injectable()
export class UsersService implements UsersServiceinterface {

  async getUsersWithProblems(): Promise<number> {
    const { rows } = await pool.query('SELECT COUNT(*) FROM users WHERE has_problems = true');
    return rows[0].count;
  }

  async getUsersWithoutProblems(): Promise<number> {
    const { rows } = await pool.query('SELECT COUNT(*) FROM users WHERE has_problems = false');
    return rows[0].count;
  }
}


// let ert = new UsersService()
// ert.getUsersWithoutProblems()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.error('Error:', err.message);
//     });