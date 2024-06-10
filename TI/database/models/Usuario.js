module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        mail: {
            type: dataTypes.STRING
        },
        contra: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        fotoPerfil: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    };

    let Usuario = sequelize.define(alias, cols, config);
    
    Usuario.associate = function(models) {
        Usuario.hasMany(models.Comentario, {
            as: "comentario", // alias: como voy a llamar a esa relacion
            foreignKey: "idUsuario" // foreignKey que relaciona ambas tablas 
        }),
        Usuario.hasMany(models.Producto, {
            as: "producto", // alias: como voy a llamar a esa relacion
            foreignKey: "idUsuario" // foreignKey que relaciona ambas tablas 
        })
    }
    return Usuario;
}