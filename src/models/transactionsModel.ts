import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Users from './usersModel';  // Importa el modelo de usuarios
import Properties from './propertiesModel';  // Importa el modelo de propiedades

const Transactions = db.define('transactions', {
    fecha: {
        type: DataTypes.DATEONLY,  // Solo fecha (sin hora)
        allowNull: false
    },
    monto: {
        type: DataTypes.DECIMAL(10, 2),  // Monto de la transacción
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('compra', 'alquiler'),  // Tipo de transacción
        allowNull: false
    },
    propiedad_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: Properties,  // Relación con el modelo de propiedades
            key: 'id'
        },
        onDelete: 'CASCADE'
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
    tableName: 'transactions',
    timestamps: true  // Maneja automáticamente createdAt y updatedAt
});

export default Transactions;
