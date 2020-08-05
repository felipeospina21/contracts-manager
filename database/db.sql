CREATE DATABASE database_links;

-- C:\Program Files\MySQL\MySQL Server 8.0\bin.

USE database_links;

-- Users Table
CREATE TABLE users
(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fulname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users  
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

-- Processes Table
CREATE TABLE process
(
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    creator VARCHAR(150) NOT NULL,
    description TEXT
);

ALTER TABLE process
    ADD PRIMARY KEY (id);

ALTER TABLE process  
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;


-- Stages Table
CREATE TABLE stages
(
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    responsible VARCHAR(150) NOT NULL,
    due_date DATE NOT NULL,
    process_id INT(11),
    CONSTRAINT fk_user FOREIGN KEY (process_id) REFERENCES process(id)
);

ALTER TABLE stages
    ADD PRIMARY KEY (id),
    MODIFY id
INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1

