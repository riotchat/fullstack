import * as express from 'express';
import * as path from 'path';

import { getVersion } from '../shared/utils';
import * as config from './config';
import Logger from './system/logging';

import apiRouter from './routes/api-router';
import pagesRouter from './routes/pages-router';
import staticRouter from './routes/static-router';

import { Helmet } from "react-helmet";

Logger.log(`Currently running RIOT version ${getVersion()}`);

const app = express();
app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, '..', '..', '..', 'assets')));
app.use(apiRouter);
app.use(staticRouter);
app.use(pagesRouter);

app.listen(config.SERVER_PORT, () => {
  Logger.info(`RIOT listening on :${config.SERVER_PORT}`);
});
