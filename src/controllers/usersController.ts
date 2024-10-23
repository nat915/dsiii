import { Request, Response } from 'express';
import Users from '../models/usersModel';

// Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener los usuarios, comuníquese con soporte'
        });
    }
};

// Obtener un usuario por su ID
export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await Users.findByPk(id);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({
                msg: `No existe un usuario con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al obtener el usuario, comuníquese con soporte'
        });
    }
};

// Eliminar un usuario por su ID
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await Users.findByPk(id);

        if (!user) {
            res.status(404).json({
                msg: `No existe un usuario con el ID ${id}`
            });
        } else {
            await user.destroy();
            res.json({
                msg: 'El usuario fue eliminado con éxito'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error al eliminar el usuario, comuníquese con soporte'
        });
    }
};

// Crear un nuevo usuario
export const postUser = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const user = await Users.create(body);
        const id = user.get('id');

        res.json({
            msg: 'El usuario fue creado con éxito',
            id: id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};

// Actualizar un usuario por su ID
export const updateUser = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const user = await Users.findByPk(id);

        if (user) {
            await user.update(body);
            res.json({
                msg: 'El usuario fue actualizado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe un usuario con el ID ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con soporte'
        });
    }
};
