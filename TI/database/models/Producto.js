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
        tableName: "datos",
        timestamps: true,
        underscored: false
    };

    let Producto = sequelize.define(alias, cols, config);
    return Producto;
}