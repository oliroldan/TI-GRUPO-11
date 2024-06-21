CREATE SCHEMA datos;

USE datos; 

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(250),
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
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
    FOREIGN KEY (idProductos) REFERENCES productos(id)
);

-- datos de 5 usuarios
INSERT INTO usuarios VALUES (DEFAULT, 'mora', 'mora1234@gmail.com', '****', '2023-10-29', 46738291, '/fotosPerfil/foto1.jpg', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'luz', 'luz1234@gmail.com', '****', '2022-08-11', 44388920, '/fotosPerfil/foto2.jpeg', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'sol', 'sol1234@gmail.com', '****', '2023-12-10', 39637191, '/fotosPerfil/foto3.avif', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'maia', 'maia1234@gmail.com', '****', '2020-10-21', 41134256, '/fotosPerfil/foto4.webp', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'mariana', 'mariana1234@gmail.com', '****', '2024-10-07', 43950345, '/fotosPerfil/foto5.png', DEFAULT, DEFAULT, DEFAULT);

-- datos de 10 productos
INSERT INTO productos VALUES (DEFAULT, '/fotosProductos/baseFitme.jpg', 'Base Fit Me', 'La base Fit Me® Matte + Poreless matifica la piel y refina los poros para un acabado naturalmente hermoso e impecable.', 1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, '/fotosProductos/blushMac.jpg', 'Blush MAC', 'Mac Cosmetics Powder Blush Rubor Polvo Varios Tonos 06g. Se aplica de manera uniforme, se adhiere a la piel para lograr una aplicación de color con aspecto natural que permanece durante todo el día.', 2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, '/fotosProductos/bronzer.jpg', 'Bronzer Rare Beauty', 'Los Bronzer Sticks de Rare Beauty son una adición innovadora y versátil para el contorneado, diseñados para ofrecer una aplicación sencilla y resultados naturales.', 3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, '/fotosProductos/lipglossDior.jpg', 'Lip Gloss Dior', 'Descubre el brillo y el glamour en cada sonrisa con el lip gloss Dior, una verdadera obra maestra de la belleza que elevará tus labios a un proximo nivel', 4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, '/fotosProductos/mascara.jpg', 'Mascara Maybelline','Es un cosmético totalmente a prueba de agua, formulado con extracto de bambú y fibras para ayudar a cuidar tus pestañas. Además, no deja grumos, ni manchas.', 5, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, '/fotosProductos/bronzerChanel.jpg', 'Bronzer Chanel', 'Esta crema gel bronceadora única, ligera y fácil de difuminar ofrece un acabado delicado y aterciopelado para un resplandor bronceado natural.', 1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, '/fotosProductos/base2.jpg', 'Base Essence', 'Base de maquillaje en polvo, resistente al agua y matificante, con gran cobertura y 16 horas de duración.', 2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, '/fotosProductos/highlighterRare.jpg', 'Highlighter Rare Beauty', 'Un iluminador en polvo innovador que le da a la piel un brillo instantáneo como el del vidrio para un brillo fácil y de apariencia natural que dura', 3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, '/fotosProductos/eyeshadow.jpg', 'Eyeshadow Charlotte Tilbury', 'Paleta de sombras de ojos con tonos nude rosa, rosa intenso y bronce melocotón para lograr unos ojos Pillow Talk DESLUMBRANTES Y SEDUCTORES.', 4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO productos VALUES (DEFAULT, '/fotosProductos/skincare2.jpg', 'Skincare Todomoda', 'Tónico iluminador con ácido hialurónico y extracto de sandía, arándanos, naranja y limón. Reabastece la hidratación para nutrir y suavizar la piel.',5, DEFAULT, DEFAULT, DEFAULT);

-- 3 comentarios por cada producto

INSERT INTO comentarios VALUES (DEFAULT, "Buen producto! Me encanto.", 1, 1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 'No me parece que valga lo que sale, igualmente es un buen producto.', 1, 2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 'Impecable producto! Y muy buen envase.', 1, 3, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES (DEFAULT, 'Tan bueno que se me termino al toque! Por lo que sale me tendria que haber controlado.', 2, 4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 'Buenisima calidad! Y el waterproof es real.', 2, 5, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 'Fanatica del producto! Lo volveria a comprar.', 2, 6, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES (DEFAULT, "Muy buena base! La mejor de todas las que probe.", 3, 7, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 'Increible producto! Selena no falla.', 3, 8, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 'No soy fanatica del prducto.', 3, 9, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES (DEFAULT, 'Cuestionable calidad, pero funciona y precio accesible.', 4, 10, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 'No me gusto, pero buen precio.', 4, 1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 'Me encanto!! 10/10.', 4, 2, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES (DEFAULT, "Lo uso todos los dias, lo recomiendo.", 5, 3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 'Mi favorito!', 5, 4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, 'No me gusta la textura que deja.', 5, 5, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES (DEFAULT, "¡Este producto es increíble! Realmente mejora mi rutina de maquillaje.", 1, 6, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, "No estoy muy convencida. No cumple todas mis expectativas.", 1, 7, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, "El color es hermoso, pero la textura podría ser mejor.", 1, 8, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES (DEFAULT, "Me encanta cómo queda en mi piel, pero desearía que durara un poco más.", 2, 9, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, "¡Definitivamente vale la pena probarlo!", 2, 10, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, "No es mi favorito, pero tiene sus puntos positivos.", 2, 1, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES (DEFAULT, "La aplicación es fácil, pero el resultado final no es exactamente lo que esperaba.", 3, 2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, "Un básico en mi rutina diaria. No puedo vivir sin él.", 3, 3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, "¡Me encanta el empaque! Realmente llama la atención.", 3, 4, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES (DEFAULT, "La fragancia es agradable, pero desearía que durara más tiempo.", 4, 5, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, "No sé si lo volvería a comprar. Hay otras opciones que prefiero.", 4, 6, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, "Lo uso a diario y siempre recibo cumplidos sobre cómo luce.", 4, 7, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios VALUES (DEFAULT, "La calidad es excelente, pero el precio es un poco alto para mi presupuesto.", 5, 8, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, "Es un producto versátil que se adapta a diferentes ocasiones.", 5, 9, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentarios VALUES (DEFAULT, "Lo compré por recomendación y no me arrepiento en absoluto. ¡Es genial!", 5, 10, DEFAULT, DEFAULT, DEFAULT);