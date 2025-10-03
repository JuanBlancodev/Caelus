import { Router } from 'express'
const router = Router();

import healthController from '../controllers/healthController';

router.get('/health', healthController)

export default router