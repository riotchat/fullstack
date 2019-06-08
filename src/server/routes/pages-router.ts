import { Router } from 'express';
import { getManifest } from './manifest-manager';

const router = Router();
export default router;

router.get(`/**`, async (_, res) => {
  const manifest = await getManifest();
  res.render('page.ejs', { manifest });
});