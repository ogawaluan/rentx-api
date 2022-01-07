import { Router } from 'express';

import packageInfo from '../../package.json';
import { ensureUserIsAuthenticated } from '../middlewares';
import sessionRoutes from './session.routes';
import specificationsRoutes from './specifications.routes';
import usersRoutes from './users.routes';
import vehiclesRoutes from './vehicles.routes';

const routes = Router();

routes.get('/ping', (_, response) => {
  const { name, version, description } = packageInfo;
  return response.status(200).json({ name, version, description });
});

routes.use('/', sessionRoutes);

routes.use('/specifications', specificationsRoutes);
routes.use(ensureUserIsAuthenticated);
routes.use('/users', usersRoutes);
routes.use('/vehicles', vehiclesRoutes);

export default routes;
