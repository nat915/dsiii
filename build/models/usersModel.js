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
        allowNull: false
    },
    contraseña: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: sequelize_1.DataTypes.ENUM('administrador', 'cliente'),
        allowNull: false
    }
}, {
    tableName: 'users', // Asegura que use la tabla llamada 'users'
    timestamps: true // Para que Sequelize maneje automáticamente createdAt y updatedAt
});
exports.default = Users;
