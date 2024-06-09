import { MigrationInterface } from 'typeorm';
import {pool} from '../db';// импортируем файл db.js

export class FillUsersTable implements MigrationInterface {
  public async up(): Promise<void> {
    const totalUsers = 100;
    const genders = ['male', 'female'];

    for (let i = 0; i < totalUsers; i++) {
      const firstName = `User_${i}`;
      const lastName = `Lastname_${i}`;
      const age = Math.floor(Math.random() * 150);
      const gender = genders[Math.floor(Math.random() * genders.length)];
      const hasProblems = Math.random() < 0.3; // 30% chance of having problems

      await pool.query(
        `INSERT INTO users (first_name, last_name, age, gender, has_problems) VALUES ($1, $2, $3, $4, $5)`,
        [firstName, lastName, age, gender, hasProblems],
      );
    }
  }

  public async down(): Promise<void> {
    await pool.query('TRUNCATE TABLE users;');
  }
}

let ert = new FillUsersTable()
ert.up()
    .then((result) => {
        console.log('создал');
    })
    .catch((err) => {
        console.error('Error:', err.message);
    });