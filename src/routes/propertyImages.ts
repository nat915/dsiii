import { Router } from 'express';
import { deletePropertyImage, getPropertyImage, getPropertyImages, postPropertyImage, updatePropertyImage } from '../controllers/propertyImagesController';

const PropertyImage = Router();

PropertyImage.get('/', getPropertyImages);          // Obtener todas las imágenes de propiedades
PropertyImage.get('/:id', getPropertyImage);        // Obtener una imagen de propiedad por ID
PropertyImage.delete('/:id', deletePropertyImage);  // Eliminar una imagen de propiedad por ID
PropertyImage.post('/', postPropertyImage);         // Crear una nueva imagen de propiedad
PropertyImage.put('/:id', updatePropertyImage);     // Actualizar una imagen de propiedad por ID

export default PropertyImage;
