module.exports = (sequelize, dataTypes) => {

    const User = sequelize.define(
        'User', {
            // Model attributes are defined here
            idCliente: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nameCliente: {
                type: dataTypes.STRING,
                allowNull: true
            },
            rgCliente: {
                type: dataTypes.INTEGER,
                allowNull: true
            },
            cpfCliente: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            emailCliente: {
                type: dataTypes.STRING,
                allowNull: false
            },
            dtnascCliente: {
                type: dataTypes.DATE,
                allowNull: true
            },
            senhaCliente: {
                type: dataTypes.STRING,
                allowNull: false
            },
            sexoCliente: {
                type: dataTypes.STRING,
                allowNull: true
            }
        }, {
            tableName: 'usuario_cliente',
            timestamps: false
        }
    );

    User.associate = (models) => {
        User.hasMany(models.Adress, {
            foreignKey: 'id_cliente',
            as: 'adress',
        });
    }

    User.associate = (models) => {
        User.hasMany(models.Payment, {
            foreignKey: 'id_cliente',
            as: 'payment',
        });
    }

    User.associate = (models) => {
        User.hasMany(models.Order, {
            foreignKey: 'id_cliente',
            as: 'order',
        });

    }

    return User
}