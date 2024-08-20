import { Pool } from 'pg';
const url ='postgres://default:Uq6eMnKFz2gb@ep-shiny-king-a264fs0o-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require';
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

interface User {
    username: string;
    password: string;
}

// Инициализация базы данных: создание таблиц
export async function initDatabase() {
    const client = await pool.connect();

    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS items (
                id SERIAL PRIMARY KEY,
                title TEXT,
                description TEXT,
                image TEXT,
                link TEXT
            )
        `);
        console.log("Создана таблица items.");
    } catch (err) {
        console.error("Ошибка при инициализации базы данных:", err instanceof Error ? err.message : "Неизвестная ошибка");
        throw err;
    } finally {
        client.release();
    }
}

// Добавление элемента в таблицу items
export async function addItem(
    title: string,
    description: string,
    image: Buffer,
    link: string
): Promise<number> {
    const client = await pool.connect();
    try {
        const insertSql = `INSERT INTO items (title, description, image, link) VALUES ($1, $2, $3, $4) RETURNING id`;
        const res = await client.query(insertSql, [title, description, image, link]);
        const id = res.rows[0].id;
        console.log(`Вставлена строка с ID ${id}`);
        return id;
    } catch (err) {
        console.error("Ошибка при вставке элемента:", err instanceof Error ? err.message : "Неизвестная ошибка");
        throw err;
    } finally {
        client.release();
    }
}

// Получение всех новостей из базы данных
export async function fetchNewsFromDatabase(): Promise<any[]> {
    const client = await pool.connect();
    try {
        const selectSql = `SELECT * FROM items`;
        const res = await client.query(selectSql);
        return res.rows.map(row => ({
            ...row,
            image: row.image ? `data:image/jpeg;base64,${row.image.toString('base64')}` : null
        }));
    } catch (err) {
        console.error("Ошибка при получении новостей из базы данных:", err instanceof Error ? err.message : "Неизвестная ошибка");
        throw err;
    } finally {
        client.release();
    }
}

// Закрытие соединения с базой данных
export async function closeDatabase() {
    try {
        await pool.end();
        console.log("Соединение с базой данных PostgreSQL закрыто.");
    } catch (err) {
        console.error("Ошибка при закрытии базы данных:", err instanceof Error ? err.message : "Неизвестная ошибка");
        throw err;
    }
}

// Получение данных пользователя по имени пользователя
export async function giveUser(username: string): Promise<User | null> {
    const client = await pool.connect();
    try {
        const selectSql = `SELECT * FROM users WHERE username = $1`;
        const res = await client.query(selectSql, [username]);
        return res.rows.length > 0 ? res.rows[0] : null;
    } catch (err) {
        console.error("Ошибка при получении данных пользователя из базы данных:", err instanceof Error ? err.message : "Неизвестная ошибка");
        throw err;
    } finally {
        client.release();
    }
}

// Удаление новости по ID
export async function deletNews(id: string): Promise<void> {
    const client = await pool.connect();
    try {
        const deletSql = `DELETE FROM items WHERE id = $1`;
        await client.query(deletSql, [id]);
    } catch (err) {
        console.error("Ошибка при удалении элемента:", err instanceof Error ? err.message : "Неизвестная ошибка");
        throw err;
    } finally {
        client.release();
    }
}

// Добавление проекта в таблицу project
export async function addProject(
    title: string,
    description: string,
    image: Buffer,
    link: string
): Promise<number> {
    const client = await pool.connect();
    try {
        const insertSql = `INSERT INTO project (title, description, image, link) VALUES ($1, $2, $3, $4) RETURNING id`;
        const res = await client.query(insertSql, [title, description, image, link]);
        const id = res.rows[0].id;
        console.log(`Вставлена строка с ID ${id}`);
        return id;
    } catch (err) {
        console.error("Ошибка при вставке проекта:", err instanceof Error ? err.message : "Неизвестная ошибка");
        throw err;
    } finally {
        client.release();
    }
}

// Получение всех проектов из базы данных
export async function fetchProjectsFromDatabase(): Promise<any[]> {
    const client = await pool.connect();
    try {
        const selectSql = `SELECT * FROM project`;
        const res = await client.query(selectSql);
        return res.rows.map(row => ({
            ...row,
            image: row.image ? `data:image/jpeg;base64,${row.image.toString('base64')}` : null
        }));
    } catch (err) {
        console.error("Ошибка при получении проектов из базы данных:", err instanceof Error ? err.message : "Неизвестная ошибка");
        throw err;
    } finally {
        client.release();
    }
}

// Удаление проекта по ID
export async function deletProject(id: string): Promise<void> {
    const client = await pool.connect();
    try {
        const deletSql = `DELETE FROM project WHERE id = $1`;
        await client.query(deletSql, [id]);
    } catch (err) {
        console.error("Ошибка при удалении проекта:", err instanceof Error ? err.message : "Неизвестная ошибка");
        throw err;
    } finally {
        client.release();
    }
}

// Удаление проекта из freeproject по ID
export async function deletFreeProject(id: string): Promise<void> {
    const client = await pool.connect();
    try {
        const deletSql = `DELETE FROM freeproject WHERE id = $1`;
        await client.query(deletSql, [id]);
    } catch (err) {
        console.error("Ошибка при удалении свободного проекта:", err instanceof Error ? err.message : "Неизвестная ошибка");
        throw err;
    } finally {
        client.release();
    }
}

// Получение всех свободных проектов из базы данных
export async function fetchFreeProjectsFromDatabase(): Promise<any[]> {
    const client = await pool.connect();
    try {
        const selectSql = `SELECT * FROM freeproject`;
        const res = await client.query(selectSql);

        // Преобразуйте изображение в формат base64
        return res.rows.map(row => ({
            ...row,
            image: row.image ? `data:image/jpeg;base64,${row.image.toString('base64')}` : null
        }));
    } catch (err) {
        console.error("Ошибка при получении свободных проектов из базы данных:", err instanceof Error ? err.message : "Неизвестная ошибка");
        throw err;
    } finally {
        client.release();
    }
}

export async function addFreeProject(
    title: string,
    description: string,
    image: Buffer,
    link: string
): Promise<number> {
    const client = await pool.connect();
    try {
        const insertSql = `INSERT INTO freeproject (title, description, image, link) VALUES ($1, $2, $3, $4) RETURNING id`;
        const res = await client.query(insertSql, [title, description, image, link]);
        const id = res.rows[0].id;
        console.log(`Inserted row with ID ${id}`);
        return id;
    } catch (err) {
        console.error("Error inserting free project:", err instanceof Error ? err.message : "Unknown error");
        throw err;
    } finally {
        client.release();
    }
}
