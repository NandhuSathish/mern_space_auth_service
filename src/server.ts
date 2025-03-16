import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
    const port = Config.PORT;
    try {
        app.listen(port, () =>
            logger.info(`Server is listening on port ${port},{PORT:port}`),
        );
    } catch (error) {
        console.error(error);
    }
};

startServer();
