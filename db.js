require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const getUsers = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

const addUser = async (name, email) => {
    const result = await pool.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
        [name, email]
    );
    return result.rows[0];
};

const deleteUser = async (name) => {
    const result = await pool.query(
        'DELETE FROM users WHERE name = $1 RETURNING *',
        [name]
    );
    if (result.rows.length === 0) {
        throw new Error('User not found');
    }
    return result.rows[0];
};

const filterUsers = async (parameter, isName) => {
    let query;
    let values;

    if (isName) {
        query = 'SELECT * FROM users WHERE LOWER(name) LIKE LOWER($1)';
    } else {
        query = 'SELECT * FROM users WHERE LOWER(email) LIKE LOWER($1)';
    }

    values = [`%${parameter}%`];

    const result = await pool.query(query, values);
    return result.rows;
}

module.exports = { getUsers, addUser, deleteUser, filterUsers };
