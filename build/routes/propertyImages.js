"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const propertyImagesController_1 = require("../controllers/propertyImagesController");
const PropertyImage = (0, express_1.Router)();
PropertyImage.get('/', propertyImagesController_1.getPropertyImages); // Obtener todas las imágenes de propiedades
PropertyImage.get('/:id', propertyImagesController_1.getPropertyImage); // Obtener una imagen de propiedad por ID
PropertyImage.delete('/:id', propertyImagesController_1.deletePropertyImage); // Eliminar una imagen de propiedad por ID
PropertyImage.post('/', propertyImagesController_1.postPropertyImage); // Crear una nueva imagen de propiedad
PropertyImage.put('/:id', propertyImagesController_1.updatePropertyImage); // Actualizar una imagen de propiedad por ID
exports.default = PropertyImage;
