import { Router } from 'express';
import { deleteTransaction, getTransaction, getTransactions, postTransaction, updateTransaction } from '../controllers/transactionsController';

const Transaction = Router();

Transaction.get('/', getTransactions);         // Obtener todas las transacciones
Transaction.get('/:id', getTransaction);       // Obtener una transacción por ID
Transaction.delete('/:id', deleteTransaction); // Eliminar una transacción por ID
Transaction.post('/', postTransaction);        // Crear una nueva transacción
Transaction.put('/:id', updateTransaction);    // Actualizar una transacción por ID

export default Transaction;
