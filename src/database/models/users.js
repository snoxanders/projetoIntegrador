module.exports = (sequelize, dataTypes) => {

    const User = sequelize.define(
        'User', {
            // Model attributes are defined here
            id_cliente: {
                type: dataTypes.INTEGER,
                primaryKey: true,
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
                type: dataTypes.DATE,
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
            tableName: 'users',
            timestamps: false
        }
    )

    User.sync();
    return User
}