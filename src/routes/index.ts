import express from 'express';
import { controllerHandler } from '../helpers';
import { fetchTransactions, commandController } from '../controllers';

const router = express.Router();

router.get('/transactions', controllerHandler(fetchTransactions));
router.post('/sendToCommand', controllerHandler(commandController));


export default router;