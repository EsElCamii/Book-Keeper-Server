const Database = require('better-sqlite3');
const db = new Database('/tmp/books.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      author TEXT NOT NULL,
      year INTEGER
    )
`);

db.exec(`
  INSERT INTO books (title, author, year)
    VALUES 
    ('Animal Farm', 'George Orwell', 1945),
    ('Harry Potter', 'J.K. Rowling', 1997),
    ('I Robot', 'Isaac Asimov', 1950)
`);

module.exports = db;
