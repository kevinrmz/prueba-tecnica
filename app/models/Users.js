const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'Número secuencial exclusivo.'
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        },
        comment: 'Nombre del usuario.'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'email already in use.'
        },
        validate: {
            notNull: true,
            notEmpty: true,
            isEmail: true,
        },
        comment: 'correo electronico usuario.'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        },
    },
    updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: DataTypes.NOW,
        allowNull: false,
        name: 'updated_at',
        field: 'updated_at'
    },
    createdAt: {
        type: 'TIMESTAMP',
        defaultValue: DataTypes.NOW,
        allowNull: false,
        name: 'created_at',
        field: 'created_at'
    },
}, {
    comment: 'Tabla de Usuarios.',
    timestamps: true,
    tableName: 'users',
});

Users.sync();

module.exports = Users;