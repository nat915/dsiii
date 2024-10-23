import { Request, Response } from 'express';
import Visits from '../models/visitsModel';

// Obtener todas las visitas
export const getVisits = async (req: Request, res: Response) => {
    try {
        const visits = await Visits.findAll();
        res.json(visits);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener las visitas, comuníquese con soporte'
        });
    }
};

// Obtener una visita por su ID
export const getVisit = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const visit = await Visits.findByPk(id);

        if (visit) {
            res.json(visit);
        } else {
            res.status(404).json({
                msg: `No existe una visita con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener la visita, comuníquese con soporte'
        });
    }
};

// Eliminar una visita por su ID
export const deleteVisit = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const visit = await Visits.findByPk(id);

        if (!visit) {
            res.status(404).json({
                msg: `No existe una visita con el ID ${id}`
            });
        } else {
            await visit.destroy();
            res.json({
                msg: 'La visita fue eliminada con éxito'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar la visita, comuníquese con soporte'
        });
    }
};

// Crear una nueva visita
export const postVisit = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const visit = await Visits.create(body);
        const id = visit.get('id');

        res.json({
            msg: 'La visita fue creada con éxito',
            id: id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al crear la visita, comuníquese con soporte'
        });
    }
};

// Actualizar una visita por su ID
export const updateVisit = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const visit = await Visits.findByPk(id);

        if (visit) {
            await visit.update(body);
            res.json({
                msg: 'La visita fue actualizada con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe una visita con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al actualizar la visita, comuníquese con soporte'
        });
    }
};
