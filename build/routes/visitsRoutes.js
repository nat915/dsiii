"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const visitsController_1 = require("../controllers/visitsController");
const Visit = (0, express_1.Router)();
Visit.get('/', visitsController_1.getVisits); // Obtener todas las visitas
Visit.get('/:id', visitsController_1.getVisit); // Obtener una visita por ID
Visit.delete('/:id', visitsController_1.deleteVisit); // Eliminar una visita por ID
Visit.post('/', visitsController_1.postVisit); // Crear una nueva visita
Visit.put('/:id', visitsController_1.updateVisit); // Actualizar una visita por ID
exports.default = Visit;
