module.exports = (sequelize, dataTypes) => {

    const Order = sequelize.define(
        'Order', {
            // Model attributes are defined here
            id_pedido: {
                type: dataTypes.INTEGER,

                allowNull: false
            },
            id_cliente: {
                type: dataTypes.STRING,
                allowNull: false
                    //CHAVE ESTRANGEIRA, CONECTAR NO BANCO DE DADOS USERS.
            },
            data_pedido: {
                type: dataTypes.DATE,
                allowNull: false
            },
            id_cartao: {
                type: dataTypes.INTEGER,
                allowNull: false
                    //CHAVE ESTRANGEIRA, CONECTAR NO BANCO DE DADOS USERS.
            },
            valor_produto: {
                type: dataTypes.DECIMAL,
                allowNull: false
            },
            nome_destinatario: {
                type: dataTypes.STRING,
                allowNull: false
            },
            user_endereco: {
                type: dataTypes.STRING,
                allowNull: false
            },
            user_cidade: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            user_estado: {
                type: dataTypes.STRING,
                allowNull: false,
            },
            user_cep: {
                type: dataTypes.INTEGER,
                allowNull: false,
            },
            status_pedido: {
                type: dataTypes.TINYINT(1),
                allowNull: false,
            }
        }, {
            tableName: 'order',
            timestamps: false
        }
    )

    return Order
}