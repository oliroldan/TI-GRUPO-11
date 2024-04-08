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
    /*los FK*/
    /* FOREIGN KEY (idGenero) REFERENCES generos(id) */
);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	fotoProducto VARCHAR(250),
    nombre VARCHAR(250),
    descripcion VARCHAR(250),
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP
    /los FK/
    /* FOREIGN KEY (id) REFERENCES usuarios(id) */
);