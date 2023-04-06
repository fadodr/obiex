import http from 'http';
import app from './app';

import { logger } from './helpers';
import { sequelize } from './configs';

const server = http.createServer(app);
const port = 3000;

sequelize.sync({ force: true }).then(() => {
    logger.info('database connected successfully')
    server.listen(port, () => {
        logger.info(`server is running on port ${port}`);
    })
}).catch((error) => {
    logger.error(error);
    process.exit(1);
});