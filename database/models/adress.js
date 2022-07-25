module.exports = (sequelize, dataTypes) => {

    const Adress = sequelize.define(
        'Adress', {
            // Model attributes are defined here
            id_cliente: {
                type: dataTypes.INTEGER,
                for: true,
                allowNull: false
            },
            name_cliente: {
                type: dataTypes.STRING,
                allowNull: false
            },
            rg_cliente: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            cpf_cliente: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            email_cliente: {
                type: dataTypes.STRING,
                allowNull: false
            },
            dtnasc_cliente: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            senha_cliente: {
                type: dataTypes.STRING,
                allowNull: false
            },
            sexo_cliente: {
                type: dataTypes.STRING,
                allowNull: false
            }
        }, {
            tableName: 'Adress',
            timestamps: false
        }
    )

    return Adress
}