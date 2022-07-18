var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
=======
const db = require("./database/models/index")
app.get('/teste', (req, res) => {
    res.send(db.Produto.findAll())
})


>>>>>>> 7012c4a70232e669657543fc6ce6c3436e505b2f
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
<<<<<<< HEAD
  next(createError(404));
=======
    next(createError(404));
>>>>>>> 7012c4a70232e669657543fc6ce6c3436e505b2f
});

// error handler
app.use(function(err, req, res, next) {
<<<<<<< HEAD
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
=======
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
>>>>>>> 7012c4a70232e669657543fc6ce6c3436e505b2f
