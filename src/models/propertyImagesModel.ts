import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Properties from './propertiesModel'; 

const PropertyImages = db.define('property_images', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    propiedad_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: Properties,  // Hace referencia al modelo de propiedades
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
    tableName: 'property_images',
    timestamps: true  
});

export default PropertyImages;
