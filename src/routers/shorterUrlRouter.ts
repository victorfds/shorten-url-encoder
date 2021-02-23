import { Router } from 'express';
import urlControl from '../dbCommands/handlerShorterUrl';

const router = Router();
const urlController = urlControl;

router.get('/:shortUrl', urlController.get);
router.post('/', urlController.post);

export default router;
