module.exports = (sequelize, dataTypes) => {

    const Payment = sequelize.define(
        'Payment', {
            // Model attributes are defined here
            id_cliente: {
                type: dataTypes.INTEGER,
                allowNull: false
                    //CHAVE ESTRANGEIRA, CONECTAR NO BANCO DE DADOS USERS.
            },
            id_cartao: {
                type: dataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            numero_cartao: {
                type: dataTypes.INTEGER,
                allowNull: false
            },

            nome_titular: {
                type: dataTypes.STRING,
                allowNull: false
            },
            validade_cartao: {
                type: dataTypes.DATE,
                allowNull: false

            }
        }, {
            tableName: 'payment',
            timestamps: false
        }
    )
    Payment.sync();
    return Payment
}