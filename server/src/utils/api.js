import express from 'express';

import register from '../middlewares/register.controller.js';

const apiRoute = express.Router();

apiRoute.post('/register', register);

export default apiRoute;