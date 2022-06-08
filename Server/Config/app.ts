import createError from 'http-errors';
import express, {NextFunction} from'express';
import path from'path';
import cookieParser from'cookie-parser';
import logger from'morgan';

import indexRouter from '../Routes/index';

const app = express();

app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname,'../../node_modules')));
app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err:createError.HttpError, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
export default app;