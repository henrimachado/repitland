CREATE DATABASE reptiland;
USE reptiland; 

CREATE TABLE Animal (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL,
    species VARCHAR(100) NOT NULL, 
    age INT,
    price FLOAT NOT NULL,
    avatar VARCHAR(255)
);

CREATE TABLE UserType (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Client (
	cpf BIGINT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    birthday TIMESTAMP NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
	avatar VARCHAR(256)
);

CREATE TABLE UserReptiland (
	cpf BIGINT PRIMARY KEY,
    username VARCHAR(100) NOT NULL, 
    password VARCHAR(255) NOT NULL, 
    user_type_id INT NOT NULL, 
    name VARCHAR(100) NOT NULL, 
    phone_number VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_type_id) REFERENCES UserType(id)
);

CREATE TABLE Sale (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    animal_id INT NOT NULL, 
    client_id BIGINT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    price FLOAT NOT NULL, 
    discount FLOAT, 
    created_by BIGINT NOT NULL, 
    sold_by BIGINT NOT NULL
);


INSERT INTO UserType(name) VALUES ('ADMIN'),('USER'); 

INSERT INTO Client(name, cpf, birthday, email, phone_number) VALUES
('João Silva', 12345678901, '1980-02-20', 'joaosilva@example.com', '+5511999999999'),
('Maria Santos', 23456789012, '1985-03-25', 'mariasantos@example.com', '+5511888888888'),
('Roberto Oliveira', 34567890123, '1990-04-30', 'robertooliveira@example.com', '+5511777777777'),
('Alice Souza', 45678901234, '1995-05-05', 'alicesouza@example.com', '+5511666666666'),
('Carlos Pereira', 56789012345, '2000-06-10', 'carlospereira@example.com', '+5511555555555');

INSERT INTO UserReptiland(cpf, username, password, user_type_id, name, phone_number) VALUES
(11111111111, 'admin', '$2b$10$OpcwD8M7XQd8d99cGeOx7.1bb7/U63QQ4J1zadyfCVg.liqmTTUiC', 1, 'Admin', '+5599999999999'),
(22222222222, 'usuario', '$2b$10$1hm6kJdqDyieMNqlW0kVzutt4Da7K3rn9L.JKwEQE6zszfnihQURm', 2, 'Common User', '+5599999999999');


INSERT INTO Animal (name, species, age, price) VALUES 
('Rex', 'Iguana', 5, 200.00),
('Bella', 'Tartaruga', 10, 150.00),
('Max', 'Cobra', 2, 300.00),
('Luna', 'Camaleão', 3, 250.00),
('Charlie', 'Dragão de Komodo', 4, 500.00);

INSERT INTO Sale (animal_id, client_id, price, discount, created_by, sold_by) VALUES 
(1, 12345678901, 200.00, 0, 11111111111, 11111111111),
(2, 23456789012, 135.00, 0.1, 11111111111, 11111111111),
(3, 34567890123, 240.00, 0.2, 11111111111, 11111111111);