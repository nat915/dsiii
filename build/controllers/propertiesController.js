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
exports.updateProperty = exports.postProperty = exports.deleteProperty = exports.getProperty = exports.getProperties = void 0;
const propertiesModel_1 = __importDefault(require("../models/propertiesModel"));
// Obtener todas las propiedades
const getProperties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const properties = yield propertiesModel_1.default.findAll();
        res.json(properties);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener las propiedades, comuníquese con soporte'
        });
    }
});
exports.getProperties = getProperties;
// Obtener una propiedad por su ID
const getProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const property = yield propertiesModel_1.default.findByPk(id);
        if (property) {
            res.json(property);
        }
        else {
            res.status(404).json({
                msg: `No existe una propiedad con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener la propiedad, comuníquese con soporte'
        });
    }
});
exports.getProperty = getProperty;
// Eliminar una propiedad por su ID
const deleteProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const property = yield propertiesModel_1.default.findByPk(id);
        if (!property) {
            res.status(404).json({
                msg: `No existe una propiedad con el ID ${id}`
            });
        }
        else {
            yield property.destroy();
            res.json({
                msg: 'La propiedad fue eliminada con éxito'
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar la propiedad, comuníquese con soporte'
        });
    }
});
exports.deleteProperty = deleteProperty;
// Crear una nueva propiedad
const postProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const property = yield propertiesModel_1.default.create(body);
        const id = property.get('id');
        res.json({
            msg: 'La propiedad fue creada con éxito',
            id: id
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al crear la propiedad, comuníquese con soporte'
        });
    }
});
exports.postProperty = postProperty;
// Actualizar una propiedad por su ID
const updateProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const property = yield propertiesModel_1.default.findByPk(id);
        if (property) {
            yield property.update(body);
            res.json({
                msg: 'La propiedad fue actualizada con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una propiedad con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al actualizar la propiedad, comuníquese con soporte'
        });
    }
});
exports.updateProperty = updateProperty;
