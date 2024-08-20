import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Загрузите переменные окружения

const { Pool } = pg;
const url ='postgres://default:Uq6eMnKFz2gb@ep-shiny-king-a264fs0o-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require';
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

async function initDatabase() {
    const client = await pool.connect();

    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS items
            (
                id SERIAL PRIMARY KEY,
                title TEXT,
                description TEXT,
                image BYTEA,
                link TEXT
            )
        `);
        console.log("Created items table.");

        await client.query(`
            CREATE TABLE IF NOT EXISTS users
            (
                id SERIAL PRIMARY KEY,
                username TEXT NOT NULL,
                password TEXT NOT NULL
            )
        `);
        console.log("Created users table.");

        const insertUserQuery = `INSERT INTO users (username, password)
                                 VALUES ($1, $2) RETURNING id`;
        const res = await client.query(insertUserQuery, ["rovio11@mail.ru", "Dobrynya2024!"]);
        console.log(`User inserted with ID ${res.rows[0].id}`);

        await client.query(`
            CREATE TABLE IF NOT EXISTS project
            (
                id SERIAL PRIMARY KEY,
                title TEXT,
                description TEXT,
                image BYTEA,
                link TEXT
            )
        `);
        console.log("Created project table.");

        await client.query(`
            CREATE TABLE IF NOT EXISTS freeproject
            (
                id SERIAL PRIMARY KEY,
                title TEXT,
                description TEXT,
                image BYTEA,
                link TEXT
            )
        `);
        console.log("Created freeproject table.");
    } catch (err) {
        console.error("Error initializing the database:", err instanceof Error ? err.message : "Unknown error");
        throw err;
    } finally {
        client.release();
    }
}

async function closeDatabase() {
    await pool.end();
    console.log("Database connection closed.");
}

initDatabase().catch((err) => console.error("Initialization failed:", err));
