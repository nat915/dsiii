import { Router } from 'express';
import { deleteAddress, getAddress, getAddresses, postAddress, updateAddress } from '../controllers/addressesController';

const Address = Router();

Address.get('/', getAddresses);         // Obtener todas las direcciones
Address.get('/:id', getAddress);        // Obtener una dirección por ID
Address.delete('/:id', deleteAddress);  // Eliminar una dirección por ID
Address.post('/', postAddress);         // Crear una nueva dirección
Address.put('/:id', updateAddress);     // Actualizar una dirección por ID

export default Address;
