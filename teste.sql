CREATE TABLE users(
    namea VARCHAR(50),
    email VARCHAR(100),
    idade INT
);
INSERT INTO users (name,email,idade) VALUES(
    "helen",
    "hl@gmail.com",
    44
);

SELECT * FROM users WHERE idade < 44;
DELETE  FROM users WHERE idade >= 44;
UPDATE users SET name = "pedrosa" WHERE name = "pedro";