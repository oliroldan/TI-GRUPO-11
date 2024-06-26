module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        fotoProducto: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        idUsuario: {
            type: dataTypes.INTEGER
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
        tableName: "productos",
        timestamps: true,
        underscored: false
    };

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuario", // alias: como voy a llamar a esa relacion
            foreignKey: "idUsuario" // foreignKey que relaciona ambas tablas
        }),
            Producto.hasMany(models.Comentario, {
                as: "comentario", // alias: como voy a llamar a esa relacion
                foreignKey: "idProductos" // foreignKey que relaciona ambas tablas 
            })
    }

    return Producto;
}