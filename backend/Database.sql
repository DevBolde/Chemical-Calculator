-- Create the 'users' table
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
    pool_size INT,
);

-- -- Create the 'chemicals' table
-- CREATE TABLE chemicals (
--     id INT PRIMARY KEY,
--     name VARCHAR(255),
--     formula VARCHAR(255),
--     molecular_weight DECIMAL(10, 2)
-- );

-- -- Create a foreign key relationship between 'users' and 'chemicals'
-- ALTER TABLE chemicals
-- ADD COLUMN user_id INT,
-- ADD CONSTRAINT fk_user_id
--     FOREIGN KEY (user_id)
--     REFERENCES users(id);
