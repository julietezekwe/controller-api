import { Router } from 'express';

const createMessagessRoute = ({ messagesController, authToken }) => {
  const router = Router();
  router.post('/', authToken.tokenVerify, messagesController.sendMessage);
  return router;
};

export default createMessagessRoute;
