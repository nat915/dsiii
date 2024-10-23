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
exports.updateVisit = exports.postVisit = exports.deleteVisit = exports.getVisit = exports.getVisits = void 0;
const visitsModel_1 = __importDefault(require("../models/visitsModel"));
// Obtener todas las visitas
const getVisits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const visits = yield visitsModel_1.default.findAll();
        res.json(visits);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener las visitas, comuníquese con soporte'
        });
    }
});
exports.getVisits = getVisits;
// Obtener una visita por su ID
const getVisit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const visit = yield visitsModel_1.default.findByPk(id);
        if (visit) {
            res.json(visit);
        }
        else {
            res.status(404).json({
                msg: `No existe una visita con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener la visita, comuníquese con soporte'
        });
    }
});
exports.getVisit = getVisit;
// Eliminar una visita por su ID
const deleteVisit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const visit = yield visitsModel_1.default.findByPk(id);
        if (!visit) {
            res.status(404).json({
                msg: `No existe una visita con el ID ${id}`
            });
        }
        else {
            yield visit.destroy();
            res.json({
                msg: 'La visita fue eliminada con éxito'
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar la visita, comuníquese con soporte'
        });
    }
});
exports.deleteVisit = deleteVisit;
// Crear una nueva visita
const postVisit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const visit = yield visitsModel_1.default.create(body);
        const id = visit.get('id');
        res.json({
            msg: 'La visita fue creada con éxito',
            id: id
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al crear la visita, comuníquese con soporte'
        });
    }
});
exports.postVisit = postVisit;
// Actualizar una visita por su ID
const updateVisit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const visit = yield visitsModel_1.default.findByPk(id);
        if (visit) {
            yield visit.update(body);
            res.json({
                msg: 'La visita fue actualizada con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una visita con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al actualizar la visita, comuníquese con soporte'
        });
    }
});
exports.updateVisit = updateVisit;
