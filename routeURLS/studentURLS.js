import express from 'express';
import { bookAppointment, getStudentAppointments, getCancelledAppointments, getBookedAppointments } from '../controllersFunctions/studentFunctions..js';
import { verify, isStudent } from '../middlewareFunction/authMiddleware.js';

const router = express.Router();

router.post('/book', verify, isStudent, bookAppointment);
router.get('/appointments', verify, isStudent, getStudentAppointments);
router.get('/appointments/cancelled', verify, isStudent, getCancelledAppointments);
router.get('/appointments/booked', verify, isStudent, getBookedAppointments);


export default router;
