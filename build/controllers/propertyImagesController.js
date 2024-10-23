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
exports.updatePropertyImage = exports.postPropertyImage = exports.deletePropertyImage = exports.getPropertyImage = exports.getPropertyImages = void 0;
const propertyImagesModel_1 = __importDefault(require("../models/propertyImagesModel"));
// Obtener todas las imágenes de propiedades
const getPropertyImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const propertyImages = yield propertyImagesModel_1.default.findAll();
        res.json(propertyImages);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener las imágenes de propiedades, comuníquese con soporte'
        });
    }
});
exports.getPropertyImages = getPropertyImages;
// Obtener una imagen de propiedad por su ID
const getPropertyImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const propertyImage = yield propertyImagesModel_1.default.findByPk(id);
        if (propertyImage) {
            res.json(propertyImage);
        }
        else {
            res.status(404).json({
                msg: `No existe una imagen de propiedad con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener la imagen de propiedad, comuníquese con soporte'
        });
    }
});
exports.getPropertyImage = getPropertyImage;
// Eliminar una imagen de propiedad por su ID
const deletePropertyImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const propertyImage = yield propertyImagesModel_1.default.findByPk(id);
        if (!propertyImage) {
            res.status(404).json({
                msg: `No existe una imagen de propiedad con el ID ${id}`
            });
        }
        else {
            yield propertyImage.destroy();
            res.json({
                msg: 'La imagen de propiedad fue eliminada con éxito'
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar la imagen de propiedad, comuníquese con soporte'
        });
    }
});
exports.deletePropertyImage = deletePropertyImage;
// Crear una nueva imagen de propiedad
const postPropertyImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const propertyImage = yield propertyImagesModel_1.default.create(body);
        const id = propertyImage.get('id');
        res.json({
            msg: 'La imagen de propiedad fue agregada con éxito',
            id: id
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al agregar la imagen de propiedad, comuníquese con soporte'
        });
    }
});
exports.postPropertyImage = postPropertyImage;
// Actualizar una imagen de propiedad por su ID
const updatePropertyImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const propertyImage = yield propertyImagesModel_1.default.findByPk(id);
        if (propertyImage) {
            yield propertyImage.update(body);
            res.json({
                msg: 'La imagen de propiedad fue actualizada con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una imagen de propiedad con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al actualizar la imagen de propiedad, comuníquese con soporte'
        });
    }
});
exports.updatePropertyImage = updatePropertyImage;
