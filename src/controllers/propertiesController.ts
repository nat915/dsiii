import { Request, Response } from 'express';
import Properties from '../models/propertiesModel';

// Obtener todas las propiedades
export const getProperties = async (req: Request, res: Response) => {
    try {
        const properties = await Properties.findAll();
        res.json(properties);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener las propiedades, comuníquese con soporte'
        });
    }
};

// Obtener una propiedad por su ID
export const getProperty = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const property = await Properties.findByPk(id);

        if (property) {
            res.json(property);
        } else {
            res.status(404).json({
                msg: `No existe una propiedad con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener la propiedad, comuníquese con soporte'
        });
    }
};

// Eliminar una propiedad por su ID
export const deleteProperty = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const property = await Properties.findByPk(id);

        if (!property) {
            res.status(404).json({
                msg: `No existe una propiedad con el ID ${id}`
            });
        } else {
            await property.destroy();
            res.json({
                msg: 'La propiedad fue eliminada con éxito'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar la propiedad, comuníquese con soporte'
        });
    }
};

// Crear una nueva propiedad
export const postProperty = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const property = await Properties.create(body);
        const id = property.get('id');

        res.json({
            msg: 'La propiedad fue creada con éxito',
            id: id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al crear la propiedad, comuníquese con soporte'
        });
    }
};

// Actualizar una propiedad por su ID
export const updateProperty = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const property = await Properties.findByPk(id);

        if (property) {
            await property.update(body);
            res.json({
                msg: 'La propiedad fue actualizada con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe una propiedad con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al actualizar la propiedad, comuníquese con soporte'
        });
    }
};
