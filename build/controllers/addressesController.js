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
exports.updateAddress = exports.postAddress = exports.deleteAddress = exports.getAddress = exports.getAddresses = void 0;
const addressesModel_1 = __importDefault(require("../models/addressesModel"));
// Obtener todas las direcciones
const getAddresses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addresses = yield addressesModel_1.default.findAll();
        res.json(addresses);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener las direcciones, comuníquese con soporte'
        });
    }
});
exports.getAddresses = getAddresses;
// Obtener una dirección por su ID
const getAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const address = yield addressesModel_1.default.findByPk(id);
        if (address) {
            res.json(address);
        }
        else {
            res.status(404).json({
                msg: `No existe una dirección con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener la dirección, comuníquese con soporte'
        });
    }
});
exports.getAddress = getAddress;
// Eliminar una dirección por su ID
const deleteAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const address = yield addressesModel_1.default.findByPk(id);
        if (!address) {
            res.status(404).json({
                msg: `No existe una dirección con el ID ${id}`
            });
        }
        else {
            yield address.destroy();
            res.json({
                msg: 'La dirección fue eliminada con éxito'
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar la dirección, comuníquese con soporte'
        });
    }
});
exports.deleteAddress = deleteAddress;
// Crear una nueva dirección
const postAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const address = yield addressesModel_1.default.create(body);
        const id = address.get('id');
        res.json({
            msg: 'La dirección fue creada con éxito',
            id: id
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al crear la dirección, comuníquese con soporte'
        });
    }
});
exports.postAddress = postAddress;
// Actualizar una dirección por su ID
const updateAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const address = yield addressesModel_1.default.findByPk(id);
        if (address) {
            yield address.update(body);
            res.json({
                msg: 'La dirección fue actualizada con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una dirección con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al actualizar la dirección, comuníquese con soporte'
        });
    }
});
exports.updateAddress = updateAddress;
