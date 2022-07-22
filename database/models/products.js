// const { Sequelize } = require('sequelize');
// const sequelize = require('sequelize');
// const database = require('../../db')
// //const database = require('../../db');

// const Produto = database.define('produto', {
//     id: {
//         type: sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     nome: {
//         type: Sequelize.STRING(200),
//         allowNull: false
//     },
//     preco: {
//         type: sequelize.DECIMAL,
//         allowNull: false
//     },
//     descricao: {
//         type: sequelize.STRING,
//         allowNull: false
//     },
//     disponibilidade: {
//         type: Sequelize.TINYINT(1),
//         allowNull: false
//     }
// })

// module.exports = Produto;

// 'use strict';
// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class produtos extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         // static associate(models) {
//         //     // define association here
//         //     produtos.belongsTo(models.categorias, {
//         //             foreignKey: 'categoriaId',
//         //             as: 'categorias'
//         //         }),
//         //         produtos.belongsToMany(models.supermercados, {
//         //             through: 'produtos_supermercados',
//         //             foreignKey: 'produtoId',
//         //             as: 'supermercado',
//         //             timestamps: false
//         //         })
//         // }
//     }
//     produtos.init({
//         nome: DataTypes.STRING,
//         categoriaId: DataTypes.INTEGER,
//         descricao: DataTypes.STRING
//     }, {
//         sequelize,
//         modelName: 'produtos',
//     });
//     return produtos;
// };

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
            preco: {
                type: dataTypes.FLOAT,
                allowNull: false
            }
        }, {
            tableName: 'products',
            timestamps: false
        }
    )

    // Product.associate = (models) => {
    //     Product.belongsTo(models.ProductType, {
    //         as: 'category',
    //         foreignKey: 'product_type'
    //     })
    // }

    // Product.associate = (models) => {
    //     Product.belongsToMany(models.Store, {
    //         through: 'stores_products',
    //         as: 'stores',
    //         foreignKey: 'id_product',
    //         otherKey: 'id_store',
    //         timestamps: false
    //     })
    // }

    return Product
}