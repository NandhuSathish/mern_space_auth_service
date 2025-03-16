import app from './app';
import { Config } from './config';

const startServer = () => {
    const port = Config.PORT;
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}`),
        );
    } catch (error) {
        console.error(error);
    }
};

startServer();
