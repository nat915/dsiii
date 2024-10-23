import { Request, Response } from 'express';
import Addresses from '../models/addressesModel';

// Obtener todas las direcciones
export const getAddresses = async (req: Request, res: Response) => {
    try {
        const addresses = await Addresses.findAll();
        res.json(addresses);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener las direcciones, comuníquese con soporte'
        });
    }
};

// Obtener una dirección por su ID
export const getAddress = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const address = await Addresses.findByPk(id);

        if (address) {
            res.json(address);
        } else {
            res.status(404).json({
                msg: `No existe una dirección con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener la dirección, comuníquese con soporte'
        });
    }
};

// Eliminar una dirección por su ID
export const deleteAddress = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const address = await Addresses.findByPk(id);

        if (!address) {
            res.status(404).json({
                msg: `No existe una dirección con el ID ${id}`
            });
        } else {
            await address.destroy();
            res.json({
                msg: 'La dirección fue eliminada con éxito'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar la dirección, comuníquese con soporte'
        });
    }
};

// Crear una nueva dirección
export const postAddress = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const address = await Addresses.create(body);
        const id = address.get('id');

        res.json({
            msg: 'La dirección fue creada con éxito',
            id: id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al crear la dirección, comuníquese con soporte'
        });
    }
};

// Actualizar una dirección por su ID
export const updateAddress = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const address = await Addresses.findByPk(id);

        if (address) {
            await address.update(body);
            res.json({
                msg: 'La dirección fue actualizada con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe una dirección con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al actualizar la dirección, comuníquese con soporte'
        });
    }
};
