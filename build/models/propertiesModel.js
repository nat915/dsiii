"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usersModel_1 = __importDefault(require("./usersModel"));
const Properties = connection_1.default.define('properties', {
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    tipo: {
        type: sequelize_1.DataTypes.ENUM('venta', 'alquiler'),
        allowNull: false
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    superficie: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    nro_habitaciones: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    nro_baños: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    usuario_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: usersModel_1.default, // Hace referencia al modelo de usuarios
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
    tableName: 'properties',
    timestamps: true // Maneja automáticamente createdAt y updatedAt
});
exports.default = Properties;
