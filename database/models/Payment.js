module.exports = (sequelize, dataTypes) => {

    const Payment = sequelize.define(
        'Payment', {
            // Model attributes are defined here
            idCliente: {
                type: dataTypes.INTEGER,
                allowNull: false
                    //CHAVE ESTRANGEIRA, CONECTAR NO BANCO DE DADOS USERS.
            },
            idCartao: {
                type: dataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            numeroCartao: {
                type: dataTypes.INTEGER,
                allowNull: false
            },

            nomeTitular: {
                type: dataTypes.STRING,
                allowNull: false
            },
            validadeCartao: {
                type: dataTypes.DATE,
                allowNull: false

            }
        }, {
            tableName: 'payment',
            timestamps: false
        }
    );


    Payment.associate = (models) => {
        Payment.hasOne(models.Order, {
            foreignKey: "idCartao",
            as: "order"
        });
    }


    return Payment
}