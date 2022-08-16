const Produto = require("./Produto");

module.exports = (sequelize, dataTypes) => {

    const Order = sequelize.define(
        'Order', {
            // Model attributes are defined here
            idPedido: {
                type: dataTypes.INTEGER,

                allowNull: false
            },
            idCliente: {
                type: dataTypes.STRING,
                allowNull: false
                    //CHAVE ESTRANGEIRA, CONECTAR NO BANCO DE DADOS USERS.
            },
            idProduto: {
                type: dataTypes.INTEGER,
                allowNull: false
            },

            dataPedido: {
                type: dataTypes.DATE,
                allowNull: false
            },
            idCartao: {
                type: dataTypes.INTEGER,
                allowNull: false
                    //CHAVE ESTRANGEIRA, CONECTAR NO BANCO DE DADOS USERS.
            },
            valorProduto: {
                type: dataTypes.DECIMAL,
                allowNull: false
            },
            nomeDestinatario: {
                type: dataTypes.STRING,
                allowNull: false
            },
            userEndereco: {
                type: dataTypes.STRING,
                allowNull: false
            },
            userCidade: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            userEstado: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            userCep: {
                type: dataTypes.INTEGER,
                allowNull: false,
            },
            statusPedido: {
                type: dataTypes.TINYINT(1),
                allowNull: false,
            }
        }, {
            tableName: 'order',
            timestamps: false
        }
    )

    Order.associate = (models) => {
        Order.hasMany(models.Product, {
            foreignKey: "idProduto",
            as: "produto"
        });
    }

    return Order
}