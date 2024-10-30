"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Users = connection_1.default.define('users', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    contraseña: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: sequelize_1.DataTypes.ENUM('administrador', 'cliente'),
        allowNull: true
    },
    calle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    ciudad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    pais: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    codigo_postal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
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
    tableName: 'users',
    timestamps: true
});
exports.default = Users;
