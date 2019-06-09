import * as path from 'path';
import { Router, static as expressStatic } from 'express';

import * as config from '../config';

const staticRouter = Router();
export default staticRouter;

staticRouter.use('/locales', expressStatic(path.join(__dirname, '..', '..', '..', '..', 'assets', 'locales')));

if (config.IS_PRODUCTION) {
  const staticsPath = path.join(__dirname, '..', '..', '..', 'statics');

  // All the assets are in "statics" folder (Done by Webpack during the build phase)
  staticRouter.use('/statics', expressStatic(staticsPath));
} else {
  const proxy = require('http-proxy-middleware');
  // All the assets are hosted by Webpack on localhost:${config.WEBPACK_PORT} (Webpack-dev-server)
  staticRouter.use(
    '/statics',
    proxy({
      target: `http://localhost:${config.WEBPACK_PORT}/`,
    }),
  );
}