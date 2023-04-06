import http from 'http';
import app from './app';

import { logger } from './helpers';

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
    logger.info(`server is running on port ${port}`);
});