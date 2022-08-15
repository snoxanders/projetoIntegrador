module.exports = (sequelize, dataTypes) => {

    const Product = sequelize.define(
        'Product', {
            // Model attributes are defined here
            // idProduto: {
            //     type: dataTypes.INTEGER,
            //     allowNull: false
            // },
            name: {
                type: dataTypes.STRING,
                allowNull: false
            },
            description: {
                type: dataTypes.TEXT('long'),
                allowNull: false
            },
            available: {
                type: dataTypes.TINYINT(1),
                allowNull: false
            },
            price: {
                type: dataTypes.FLOAT,
                allowNull: false
            },
            rotaImg: {
                type: dataTypes.STRING,
                allowNull: false
            }
        }, {
            tableName: 'produto',
            timestamps: false
        }
    );

    Product.associate = (models) => {
        Product.hasMany(models.Order, {
            foreignKey: "idProduto",
            as: "order"
        });
    }

    return Product
}