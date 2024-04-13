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

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	fotoProducto VARCHAR(250),
    nombre VARCHAR(250),
    descripcion VARCHAR(250),
    idUsuario INT UNSIGNED,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	comentario VARCHAR(250),
    idUsuario INT UNSIGNED,
    idProductos INT UNSIGNED,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt           TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuarios) REFERENCES usuarios(id),
    FOREIGN KEY (idProductos) REFERENCES productos(id)
);

INSERT INTO usuarios VALUES (DEFAULT, 'mora1234gmail.com', '****', '2023-10-29', 46738291, './public/fotosPerfil/foto1.aviv', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'luz1234gmail.com', '****', '2022-08-11', 44388920, './public/fotosPerfil/foto2.jpeg', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'sol1234gmail.com', '****', '2023-12-10', 39637191, './public/fotosPerfil/foto3.aviv', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'maia1234gmail.com', '****', '2020-10-21', 41134256, './public/fotosPerfil/foto4.webp', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'mariana1234gmail.com', '****', '2024-10-07', 43950345, './public/fotosPerfil/foto5.png', DEFAULT, DEFAULT, DEFAULT);


INSERT INTO productos VALUES (DEFAULT, './public/productos/baseFitme.jpg', 'Base Fit Me', 'La base Fit Me® Matte + Poreless matifica la piel y refina los poros para un acabado naturalmente hermoso e impecable.', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, './public/productos/blushMac.jpg', 'Blush MAC', 'Mac Cosmetics Powder Blush Rubor Polvo Varios Tonos 06g. Se aplica de manera uniforme, se adhiere a la piel para lograr una aplicación de color con aspecto natural que permanece durante todo el día.', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, './public/productos/bronzer.jpg', 'Bronzer Rare Beauty', 'Los Bronzer Sticks de Rare Beauty son una adición innovadora y versátil para el contorneado, diseñados para ofrecer una aplicación sencilla y resultados naturales.', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, './public/productos/lipglossDior.jpg', 'Lip Gloss Dior', 'Descubre el brillo y el glamour en cada sonrisa con el lip gloss Dior, una verdadera obra maestra de la belleza que elevará tus labios a un proximo nivel', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, './public/productos/mascara.jpg', 'Mascara Maybelline','Es un cosmético totalmente a prueba de agua, formulado con extracto de bambú y fibras para ayudar a cuidar tus pestañas. Además, no deja grumos, ni manchas.', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, './public/productos/bronzerChanel.jpg', 'Bronzer Chanel', 'Esta crema gel bronceadora única, ligera y fácil de difuminar ofrece un acabado delicado y aterciopelado para un resplandor bronceado natural.', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, './public/productos/base2.jpg', 'Base Essence', 'Base de maquillaje en polvo, resistente al agua y matificante, con gran cobertura y 16 horas de duración.', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, './public/productos/highlighterRare.jpg', 'Highlighter Rare Beauty', 'Un iluminador en polvo innovador que le da a la piel un brillo instantáneo como el del vidrio para un brillo fácil y de apariencia natural que dura', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, './public/productos/eyeshadow.jpg', 'Eyeshadow Charlotte Tilbury', 'Paleta de sombras de ojos con tonos nude rosa, rosa intenso y bronce melocotón para lograr unos ojos Pillow Talk DESLUMBRANTES Y SEDUCTORES.', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, './public/productos/skincare2.jpg', 'Skincare Todomoda', 'Tónico iluminador con ácido hialurónico y extracto de sandía, arándanos, naranja y limón. Reabastece la hidratación para nutrir y suavizar la piel.',DEFAULT, DEFAULT, DEFAULT, DEFAULT);

-- hay un error los into de productos