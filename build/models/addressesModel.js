"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usersModel_1 = __importDefault(require("./usersModel")); // Importa el modelo de usuarios
const Addresses = connection_1.default.define('addresses', {
    calle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    ciudad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    pais: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    codigo_postal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    usuario_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: usersModel_1.default, // Relación con el modelo de usuarios
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    tableName: 'addresses',
    timestamps: true // Maneja automáticamente createdAt y updatedAt
});
exports.default = Addresses;
