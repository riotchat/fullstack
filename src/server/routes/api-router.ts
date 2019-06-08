import { Router } from 'express';
import * as bodyParser from 'body-parser';

const router = Router();
export default router;

router.use(bodyParser.json());