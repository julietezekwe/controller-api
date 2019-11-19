import { Router } from 'express';

const createMessagessRoute = ({ usersController }) => {
  const router = Router();
  router.post('/', usersController.authenticateUser);
  return router;
};

export default createMessagessRoute;
