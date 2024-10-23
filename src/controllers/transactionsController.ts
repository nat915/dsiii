import { Request, Response } from 'express';
import Transaction from '../models/transactionsModel';

// Obtener todas las transacciones
export const getTransactions = async (req: Request, res: Response) => {
    try {
        const transactions = await Transaction.findAll();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Obtener una transacción por su ID
export const getTransaction = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const transaction = await Transaction.findByPk(id);

        if (transaction) {
            res.json(transaction);
        } else {
            res.status(404).json({
                msg: `No existe una transacción con el ID ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Eliminar una transacción por su ID
export const deleteTransaction = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const transaction = await Transaction.findByPk(id);

        if (!transaction) {
            return res.status(404).json({
                msg: `No existe una transacción con el ID ${id}`
            });
        }

        await transaction.destroy();
        res.json({
            msg: 'La transacción fue eliminada con éxito'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Crear una nueva transacción
export const postTransaction = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const transaction = await Transaction.create(body);
        const id = transaction.get('id');

        res.json({
            msg: 'La transacción fue creada con éxito',
            id: id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Actualizar una transacción por su ID
export const updateTransaction = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const transaction = await Transaction.findByPk(id);

        if (!transaction) {
            return res.status(404).json({
                msg: `No existe una transacción con el ID ${id}`
            });
        }

        await transaction.update(body);
        res.json({
            msg: 'La transacción fue actualizada con éxito'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};
