import { Request, Response, Router } from 'express';
import auth from './auth';
import comment from './comment';
import post from './post';
import user from './user';

const routes = Router();

routes.get('/', (req, res) => res.send('hacker news api clone'));

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/post', post);
routes.use('/comments', comment);

export default routes;
