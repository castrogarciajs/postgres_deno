CREATE DATABASE deno;

CREATE TABLE task_deno(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    lastname VARCHAR(50)
);


SELECT * FROM task_deno;

INSERT INTO task_deno(name,lastname) VALUES ('Sebastian', 'Castro');

DELETE FROM task_deno WHERE id = 1;

UPDATE task_deno SET name="Sebastian" lastname="Castro" WHERE id=2