import express from 'express';
import { getProfessorShedules, updateAppointmentStatus } from '../controllersFunctions/professorFunctions..js';
import { verify, isProfessor } from '../middlewareFunction/authMiddleware.js';

const router = express.Router();

router.get('/appointments', verify, isProfessor, getProfessorShedules);
router.put('/appointments/:id', verify, isProfessor, updateAppointmentStatus);

export default router;
