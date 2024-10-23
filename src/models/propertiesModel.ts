import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Users from './usersModel'; 

const Properties = db.define('properties', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('venta', 'alquiler'),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    superficie: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    nro_habitaciones: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nro_baños: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: Users,  // Hace referencia al modelo de usuarios
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'properties',
    timestamps: true  // Maneja automáticamente createdAt y updatedAt
});

export default Properties;
