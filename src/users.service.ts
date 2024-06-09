import { pool } from './db';

class UsersService {
  async createUser() {
    const { rows } = await pool.query('select * from users ');
    return rows;
  }
}


module.exports = UsersService;

let ert = new UsersService()
ert.createUser()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error('Error:', err.message);
    });