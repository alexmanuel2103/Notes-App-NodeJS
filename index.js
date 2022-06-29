
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const methodOverride = require('method-override');
const session = require ('express-session');


//initializations
const app = express();
require('./database');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine','.hbs');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));


//Global variables

//routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
//static files

app.use(express.static(path.join(__dirname,'public')));
//server is listening


app.listen(app.get('port'), ()=>{
    console.log('Server is listening on port: ',app.get('port'));

});