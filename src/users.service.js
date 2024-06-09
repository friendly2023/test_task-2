const db = require('./db');


class UsersService {
  async createUser() {
    const { rows } = await db.query('select * from users ');
    return rows;
  }

}

module.exports = UsersService;

// let ert = new UsersService()
// ert.createUser()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.error('Error:', err.message);
//     });