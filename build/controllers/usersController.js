"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.postUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const usersModel_1 = __importDefault(require("../models/usersModel"));
// Obtener todos los usuarios
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield usersModel_1.default.findAll();
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener los usuarios, comuníquese con soporte'
        });
    }
});
exports.getUsers = getUsers;
// Obtener un usuario por su ID
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield usersModel_1.default.findByPk(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({
                msg: `No existe un usuario con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener el usuario, comuníquese con soporte'
        });
    }
});
exports.getUser = getUser;
// Eliminar un usuario por su ID
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield usersModel_1.default.findByPk(id);
        if (!user) {
            res.status(404).json({
                msg: `No existe un usuario con el ID ${id}`
            });
        }
        else {
            yield user.destroy();
            res.json({
                msg: 'El usuario fue eliminado con éxito'
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar el usuario, comuníquese con soporte'
        });
    }
});
exports.deleteUser = deleteUser;
// Crear un nuevo usuario
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const user = yield usersModel_1.default.create(body);
        const id = user.get('id');
        res.json({
            msg: 'El usuario fue creado con éxito',
            id: id
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.postUser = postUser;
// Actualizar un usuario por su ID
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const user = yield usersModel_1.default.findByPk(id);
        if (user) {
            yield user.update(body);
            res.json({
                msg: 'El usuario fue actualizado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un usuario con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.updateUser = updateUser;
