var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var cors = require('cors');
require('dotenv').config({ path: './config/secret.env' });
const rfs = require('rotating-file-stream');
const uploadFile = require('express-fileupload');
const bodyParser = require('body-parser');

//connect DB
const InitiateMongoServer = require('./lib/dbconnect');
InitiateMongoServer();

var app = express();

app.use(uploadFile({
  createParentPath: true,
  safeFileNames: false,
  preserveExtension: true
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//logger
var logger = require("./lib/logger");
var { stream } = logger;
const accessLogStream = rfs.createStream('server.log', {
  interval: '1d',
  path: path.join(__dirname, '/logger/logs'),
});

//mogan
morgan.token('th-date', (req, res) => {
  const date = new Date();
  return date;
});
app.use(morgan('common', { stream: accessLogStream }));
app.use(
  morgan(
    ':th-date :method[pretty] :url :status :res[content-length] - :response-time ms',
    {
      stream: stream,
    }
  )
);

//swagger
const swaggerDoc = require('./lib/swagger');
const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//authentication
const authRouter = require('./routes/authRouter');
app.use('/auth', authRouter);

//villager
const villagerRouter = require('./routes/villagerRouter');
app.use('/villager', villagerRouter);

//agent
const agentRouter = require('./routes/agentRouter');
app.use('/agent', agentRouter);

//petition
const petitionRouter = require('./routes/petitionRouter');
app.use('/petition', petitionRouter);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
