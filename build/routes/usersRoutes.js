"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const User = (0, express_1.Router)();
User.get('/', usersController_1.getUsers); // Obtener todos los usuarios
User.get('/:id', usersController_1.getUser); // Obtener un usuario por ID
User.delete('/:id', usersController_1.deleteUser); // Eliminar un usuario por ID
User.post('/', usersController_1.postUser); // Crear un nuevo usuario
User.put('/:id', usersController_1.updateUser); // Actualizar un usuario por ID
exports.default = User;
