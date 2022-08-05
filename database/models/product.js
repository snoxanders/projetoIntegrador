module.exports = (sequelize, dataTypes) => {

    const Product = sequelize.define(
        'Product', {
            // Model attributes are defined here
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
            }
        }, {
            tableName: 'products',
            timestamps: false
        }
    );

    Product.associate = (models) => {
        Product.hasMany(models.Order, {
            foreignKey: "id_produto",
            as: "order"
        });
    }
    Product.sync();
    return Product
}