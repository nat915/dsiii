import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Users from './usersModel';  // Importa el modelo de usuarios

const Addresses = db.define('addresses', {
    calle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo_postal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: Users,  // Relación con el modelo de usuarios
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
    tableName: 'addresses',
    timestamps: true  // Maneja automáticamente createdAt y updatedAt
});

export default Addresses;
