module.exports = (sequelize, dataTypes) => {

    const Adress = sequelize.define(
        'Adress', {
            // Model attributes are defined here
            id_endereco: {
                type: dataTypes.INTEGER,

                allowNull: false
            },
            end_rua: {
                type: dataTypes.STRING,
                allowNull: false
            },
            end_numero: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            end_bairro: {
                type: dataTypes.STRING,
                allowNull: false
            },
            end_cep: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            end_cidade: {
                type: dataTypes.STRING,
                allowNull: false
            },
            end_estado: {
                type: dataTypes.STRING,
                allowNull: false
            },
            id_cliente: {
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