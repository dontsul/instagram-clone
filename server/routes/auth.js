import { Router } from 'express';
import { registration, login, getMe } from '../controllers/auth.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

//registartion
//// http://localhost:3002/api/auth/registration
router.post('/registration', registration);

//login
//// http://localhost:3002/api/auth/registration
router.post('/login', login);

//get me
//// http://localhost:3002/api/auth/registration
router.post('/me', checkAuth, getMe);

export default router;
