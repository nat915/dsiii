import { Request, Response } from 'express';
import PropertyImages from '../models/propertyImagesModel';

// Obtener todas las imágenes de propiedades
export const getPropertyImages = async (req: Request, res: Response) => {
    try {
        const propertyImages = await PropertyImages.findAll();
        res.json(propertyImages);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener las imágenes de propiedades, comuníquese con soporte'
        });
    }
};

// Obtener una imagen de propiedad por su ID
export const getPropertyImage = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const propertyImage = await PropertyImages.findByPk(id);

        if (propertyImage) {
            res.json(propertyImage);
        } else {
            res.status(404).json({
                msg: `No existe una imagen de propiedad con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener la imagen de propiedad, comuníquese con soporte'
        });
    }
};

// Eliminar una imagen de propiedad por su ID
export const deletePropertyImage = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const propertyImage = await PropertyImages.findByPk(id);

        if (!propertyImage) {
            res.status(404).json({
                msg: `No existe una imagen de propiedad con el ID ${id}`
            });
        } else {
            await propertyImage.destroy();
            res.json({
                msg: 'La imagen de propiedad fue eliminada con éxito'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar la imagen de propiedad, comuníquese con soporte'
        });
    }
};

// Crear una nueva imagen de propiedad
export const postPropertyImage = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const propertyImage = await PropertyImages.create(body);
        const id = propertyImage.get('id');

        res.json({
            msg: 'La imagen de propiedad fue agregada con éxito',
            id: id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al agregar la imagen de propiedad, comuníquese con soporte'
        });
    }
};

// Actualizar una imagen de propiedad por su ID
export const updatePropertyImage = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const propertyImage = await PropertyImages.findByPk(id);

        if (propertyImage) {
            await propertyImage.update(body);
            res.json({
                msg: 'La imagen de propiedad fue actualizada con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe una imagen de propiedad con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al actualizar la imagen de propiedad, comuníquese con soporte'
        });
    }
};
