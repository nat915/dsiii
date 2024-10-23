"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionsController_1 = require("../controllers/transactionsController");
const Transaction = (0, express_1.Router)();
Transaction.get('/', transactionsController_1.getTransactions); // Obtener todas las transacciones
Transaction.get('/:id', transactionsController_1.getTransaction); // Obtener una transacción por ID
Transaction.delete('/:id', transactionsController_1.deleteTransaction); // Eliminar una transacción por ID
Transaction.post('/', transactionsController_1.postTransaction); // Crear una nueva transacción
Transaction.put('/:id', transactionsController_1.updateTransaction); // Actualizar una transacción por ID
exports.default = Transaction;
