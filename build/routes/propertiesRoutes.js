"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const propertiesController_1 = require("../controllers/propertiesController");
const Property = (0, express_1.Router)();
Property.get('/', propertiesController_1.getProperties); // Obtener todas las propiedades
Property.get('/:id', propertiesController_1.getProperty); // Obtener una propiedad por ID
Property.delete('/:id', propertiesController_1.deleteProperty); // Eliminar una propiedad por ID
Property.post('/', propertiesController_1.postProperty); // Crear una nueva propiedad
Property.put('/:id', propertiesController_1.updateProperty); // Actualizar una propiedad por ID
exports.default = Property;
