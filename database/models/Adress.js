module.exports = (sequelize, dataTypes) => {

    const Adress = sequelize.define(
        'Adress', {
            // Model attributes are defined here
            idEndereco: {
                type: dataTypes.INTEGER,

                allowNull: false
            },
            endRua: {
                type: dataTypes.STRING,
                allowNull: false
            },
            endNumero: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            endBairro: {
                type: dataTypes.STRING,
                allowNull: false
            },
            endCep: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            endCidade: {
                type: dataTypes.STRING,
                allowNull: false
            },
            endEstado: {
                type: dataTypes.STRING,
                allowNull: false
            },
            idCliente: {
                type: dataTypes.STRING,
                allowNull: false,
                //CHAVE ESTRANGEIRA, CONECTAR NO BANCO DE DADOS USERS.
            }
        }, {
            tableName: 'adress',
            timestamps: false
        }
    )

    return Adress
}