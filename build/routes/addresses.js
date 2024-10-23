"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addressesController_1 = require("../controllers/addressesController");
const Address = (0, express_1.Router)();
Address.get('/', addressesController_1.getAddresses); // Obtener todas las direcciones
Address.get('/:id', addressesController_1.getAddress); // Obtener una dirección por ID
Address.delete('/:id', addressesController_1.deleteAddress); // Eliminar una dirección por ID
Address.post('/', addressesController_1.postAddress); // Crear una nueva dirección
Address.put('/:id', addressesController_1.updateAddress); // Actualizar una dirección por ID
exports.default = Address;
