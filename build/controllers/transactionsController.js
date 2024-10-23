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
exports.updateTransaction = exports.postTransaction = exports.deleteTransaction = exports.getTransaction = exports.getTransactions = void 0;
const transactionsModel_1 = __importDefault(require("../models/transactionsModel"));
// Obtener todas las transacciones
const getTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactions = yield transactionsModel_1.default.findAll();
        res.json(transactions);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.getTransactions = getTransactions;
// Obtener una transacción por su ID
const getTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const transaction = yield transactionsModel_1.default.findByPk(id);
        if (transaction) {
            res.json(transaction);
        }
        else {
            res.status(404).json({
                msg: `No existe una transacción con el ID ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.getTransaction = getTransaction;
// Eliminar una transacción por su ID
const deleteTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const transaction = yield transactionsModel_1.default.findByPk(id);
        if (!transaction) {
            return res.status(404).json({
                msg: `No existe una transacción con el ID ${id}`
            });
        }
        yield transaction.destroy();
        res.json({
            msg: 'La transacción fue eliminada con éxito'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.deleteTransaction = deleteTransaction;
// Crear una nueva transacción
const postTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const transaction = yield transactionsModel_1.default.create(body);
        const id = transaction.get('id');
        res.json({
            msg: 'La transacción fue creada con éxito',
            id: id
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.postTransaction = postTransaction;
// Actualizar una transacción por su ID
const updateTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const transaction = yield transactionsModel_1.default.findByPk(id);
        if (!transaction) {
            return res.status(404).json({
                msg: `No existe una transacción con el ID ${id}`
            });
        }
        yield transaction.update(body);
        res.json({
            msg: 'La transacción fue actualizada con éxito'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
});
exports.updateTransaction = updateTransaction;
