const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Абсолютный путь для Vercel
const dbPath = path.join("/tmp", "collection.db");

const db = new sqlite3.Database(
    dbPath,
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            return console.error("Failed to connect to the database:", err.message);
        }
        console.log("Connected to the SQLite database.");
    }
);

const value = ["rovio11@mail.ru", "Dobrynya2024!"];

const insertSql = `INSERT INTO users (username, password) VALUES(?, ?)`;

db.serialize(() => {
    db.run(
        `
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY,
      title TEXT,
      description TEXT,
      image TEXT,
      link TEXT
    );
  `,
        (err) => {
            if (err) {
                return console.error("Error creating items table:", err.message);
            }
            console.log("Created items table.");
        }
    );

    db.run(
        `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL
    );
  `,
        (err) => {
            if (err) {
                return console.error("Error creating users table:", err.message);
            }
            console.log("Created users table.");
        }
    );

    db.run(insertSql, value, function (err) {
        if (err) {
            return console.error("Error inserting into users:", err.message);
        }
        const id = this.lastID; // get the id of the last inserted row
        console.log(`Rows inserted, ID ${id}`);
    });

    db.run(
        `
    CREATE TABLE IF NOT EXISTS project (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT, 
      description TEXT ,
      image TEXT,
      link TEXT
    );
  `,
        (err) => {
            if (err) {
                return console.error("Error creating project table:", err.message);
            }
            console.log("Created project table.");
        }
    );

    db.run(
        `
    CREATE TABLE IF NOT EXISTS freeproject (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT, 
      description TEXT ,
      image TEXT,
      link TEXT
    );
  `,
        (err) => {
            if (err) {
                return console.error("Error creating freeproject table:", err.message);
            }
            console.log("Created freeproject table.");
        }
    );
});

// Закрытие соединения с базой данных после выполнения всех операций
db.close((err) => {
    if (err) {
        return console.error("Error closing the database connection:", err.message);
    }
    console.log("Closed the database connection.");
});
