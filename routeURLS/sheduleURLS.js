import express from 'express';
import { addAvailability, getProfessorAvailability } from '../controllersFunctions/availabilityFunctions.js';
import { verify, isProfessor } from '../middlewareFunction/authMiddleware.js';

const router = express.Router();

router.post('/', verify, isProfessor, addAvailability);
router.get('/:professorId', verify, getProfessorAvailability); 
export default router;
