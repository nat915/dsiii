import { Router } from 'express';
import { deleteProperty, getProperty, getProperties, postProperty, updateProperty } from '../controllers/propertiesController';

const Property = Router();

Property.get('/', getProperties);         // Obtener todas las propiedades
Property.get('/:id', getProperty);        // Obtener una propiedad por ID
Property.delete('/:id', deleteProperty);  // Eliminar una propiedad por ID
Property.post('/', postProperty);         // Crear una nueva propiedad
Property.put('/:id', updateProperty);     // Actualizar una propiedad por ID

export default Property;
