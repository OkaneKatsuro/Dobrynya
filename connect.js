import {Pool} from 'pg';

// Создаем пул соединений с базой данных
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

const value = ["rovio11@mail.ru", "Dobrynya2024!"];

// Инициализация базы данных: создание таблиц и вставка начальных данных
async function initDatabase() {
    const client = await pool.connect();

    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS items
            (
                id
                SERIAL
                PRIMARY
                KEY,
                title
                TEXT,
                description
                TEXT,
                image
                TEXT,
                link
                TEXT
            )
        `);
        console.log("Created items table.");

        await client.query(`
            CREATE TABLE IF NOT EXISTS users
            (
                id
                SERIAL
                PRIMARY
                KEY,
                username
                TEXT
                NOT
                NULL,
                password
                TEXT
                NOT
                NULL
            )
        `);
        console.log("Created users table.");

        const insertUserQuery = `INSERT INTO users (username, password)
                                 VALUES ($1, $2) RETURNING id`;
        const res = await client.query(insertUserQuery, value);
        console.log(`User inserted with ID ${res.rows[0].id}`);

        await client.query(`
            CREATE TABLE IF NOT EXISTS project
            (
                id
                SERIAL
                PRIMARY
                KEY,
                title
                TEXT,
                description
                TEXT,
                image
                TEXT,
                link
                TEXT
            )
        `);
        console.log("Created project table.");

        await client.query(`
            CREATE TABLE IF NOT EXISTS freeproject
            (
                id
                SERIAL
                PRIMARY
                KEY,
                title
                TEXT,
                description
                TEXT,
                image
                TEXT,
                link
                TEXT
            )
        `);
        console.log("Created freeproject table.");
    } catch (err) {
        console.error("Error initializing the database:", err.message);
        throw err;
    } finally {
        client.release();
    }
}

// Закрытие соединения с базой данных (необходимо, если вы завершаете работу)
async function closeDatabase() {
    await pool.end();
    console.log("Database connection closed.");
}

// Инициализация базы данных при старте приложения
initDatabase().catch((err) => console.error("Initialization failed:", err));

// Пример вызова функции закрытия базы данных (при необходимости)
// closeDatabase();
