module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        idProductos: {
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
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    };

    let Comentario = sequelize.define(alias, cols, config);
    return Comentario;
}