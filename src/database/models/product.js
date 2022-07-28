module.exports = (sequelize, dataTypes) => {

    const Product = sequelize.define(
        'Products', {
            // Model attributes are defined here
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: dataTypes.STRING,
                allowNull: false
            },
            description: {
                type: dataTypes.STRING,
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
    )
    return Product
}