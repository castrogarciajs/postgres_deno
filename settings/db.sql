CREATE DATABASE deno;

CREATE TABLE task_deno(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    lastname VARCHAR(50)
);


SELECT * FROM task_deno;

INSERT INTO task_deno(name,lastname) VALUES ('Sebastian', 'Castro');