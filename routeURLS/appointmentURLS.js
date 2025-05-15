import express from 'express';
import { bookAppointment, getStudentAppointments, getCancelledAppointments} from '../controllersFunctions/studentController.js';

import { verify, isStudent } from '../middlewareFunction/authMiddleware.js';

const router = express.Router();

router.post('/book', verify, isStudent, bookAppointment);
router.get('/appointments', verify, isStudent, getStudentAppointments);
router.get('/appointments/cancelled', verify, isStudent, getCancelledAppointments);

export default router;
