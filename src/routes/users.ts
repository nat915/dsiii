import { Router } from 'express';
import { deleteUser, getUser, getUsers, postUser, updateUser } from '../controllers/usersController';

const User = Router();

User.get('/', getUsers);         // Obtener todos los usuarios
User.get('/:id', getUser);       // Obtener un usuario por ID
User.delete('/:id', deleteUser); // Eliminar un usuario por ID
User.post('/', postUser);        // Crear un nuevo usuario
User.put('/:id', updateUser);    // Actualizar un usuario por ID

export default User;
