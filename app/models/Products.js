const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');

const Products = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'Número secuencial exclusivo.'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        },
        comment: 'Nombre de usuario.'
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        },
        comment: 'correo electronico usuario.'
    },
    amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        },
        comment: 'Monto del producto.'
    }
}, {
    comment: 'Tabla de Productos.',
    timestamps: false,
    tableName: 'products',
});

Products.sync();

module.exports = Products;