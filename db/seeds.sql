DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(40),
    password VARCHAR(40),
    image text
);

INSERT INTO users(username, password, image) VALUES
('joe', '123joe', 'https://robohash.org/joe'),
('max', '123max', 'https://robohash.org/max'),
('lee', '123lee', 'https://robohash.org/lee');

SELECT * 
FROM users;