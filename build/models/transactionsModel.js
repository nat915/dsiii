"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usersModel_1 = __importDefault(require("./usersModel")); // Importa el modelo de usuarios
const propertiesModel_1 = __importDefault(require("./propertiesModel")); // Importa el modelo de propiedades
const Transactions = connection_1.default.define('transactions', {
    fecha: {
        type: sequelize_1.DataTypes.DATEONLY, // Solo fecha (sin hora)
        allowNull: false
    },
    monto: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2), // Monto de la transacción
        allowNull: false
    },
    tipo: {
        type: sequelize_1.DataTypes.ENUM('compra', 'alquiler'), // Tipo de transacción
        allowNull: false
    },
    propiedad_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: propertiesModel_1.default, // Relación con el modelo de propiedades
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    usuario_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: usersModel_1.default, // Relación con el modelo de usuarios
            key: 'id'
        },
        onDelete: 'CASCADE'
    }
}, {
    tableName: 'transactions',
    timestamps: true // Maneja automáticamente createdAt y updatedAt
});
exports.default = Transactions;
