CREATE SCHEMA datos;

USE datos; 

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	mail VARCHAR(250),
    contra VARCHAR(250),
    fecha DATE,
    dni INT,
    fotoPerfil VARCHAR(250),
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios VALUES (DEFAULT, 'mora1234gmail.com', '****', '2023-10-29', 46738291, './public/fotosPerfil/foto1.aviv', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'luz1234gmail.com', '****', '2022-08-11', 44388920, './public/fotosPerfil/foto2.jpeg', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'sol1234gmail.com', '****', '2023-12-10', 39637191, './public/fotosPerfil/foto3.aviv', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'maia1234gmail.com', '****', '2020-10-21', 41134256, './public/fotosPerfil/foto4.webp', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'mariana1234gmail.com', '****', '2024-10-07', 43950345, './public/fotosPerfil/foto5.png', DEFAULT, DEFAULT, DEFAULT);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	fotoProducto VARCHAR(250),
    nombre VARCHAR(250),
    descripcion VARCHAR(250),
    idUsuario INT,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	comentario VARCHAR(250),
    idUsuario INT,
    idProductos INT,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuarios) REFERENCES usuarios(id),
    FOREIGN KEY (idProductos) REFERENCES productos(id)
)