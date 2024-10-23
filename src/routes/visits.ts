import { Router } from 'express';
import { deleteVisit, getVisit, getVisits, postVisit, updateVisit } from '../controllers/visitsController';

const Visit = Router();

Visit.get('/', getVisits);         // Obtener todas las visitas
Visit.get('/:id', getVisit);       // Obtener una visita por ID
Visit.delete('/:id', deleteVisit); // Eliminar una visita por ID
Visit.post('/', postVisit);        // Crear una nueva visita
Visit.put('/:id', updateVisit);    // Actualizar una visita por ID

export default Visit;
