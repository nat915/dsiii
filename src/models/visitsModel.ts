import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Users from './usersModel';  // Importa el modelo de usuarios
import Properties from './propertiesModel';  // Importa el modelo de propiedades

const Visits = db.define('visits', {
    fecha: {
        type: DataTypes.DATEONLY,  // Solo fecha (sin tiempo)
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,  // Solo hora
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
    tableName: 'visits',
    timestamps: true  // Maneja automáticamente createdAt y updatedAt
});

export default Visits;
