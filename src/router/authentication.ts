import express from 'express';

import { register, login, logOut } from '../controllers/authentication';

export default (router: express.Router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
    router.post('/auth/logOut', logOut);
};