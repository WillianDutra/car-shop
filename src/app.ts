import express from 'express';
import Routes from './Routes/index';
import ErrorHandler from './Middlewares/ErrorHandle';

const app = express();
app.use(Routes);
app.use(ErrorHandler.Handle);

export default app;
