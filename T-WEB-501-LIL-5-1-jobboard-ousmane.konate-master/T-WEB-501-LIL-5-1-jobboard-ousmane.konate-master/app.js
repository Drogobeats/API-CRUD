const express = require ('express');
const morgan = require ('morgan');
const mongoose = require ('mongoose');
const offerRoutes = require('./routes/offerRoutes');
const userRoutes = require('./routes/userRoutes');

// express app

const app = express();

// connect to mongodb

const dbURI = 'mongodb+srv://drogobeats:konate1995@cluster0.ndipq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('connected to db')) 
    .catch((err) => console.log(err));

// register view engine

app.set('view engine', 'ejs');

// middleware & static files

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req,res,next)=>{
    res.locals.path = req.path;
    next();
})


// listen for requests

app.listen(3000);

// routes

app.get('/', (req, res) => {
    res.redirect('/offers');
});

app.get('/about', (req, res) => {

    res.render('about', { title: 'About us'});
});
app.get('/add-user', (req, res) => {

    res.render('add-user', { title: 'Join us'});
});

app.get('/login', (req, res) => {

    res.render('login', { title: 'Log-in'});
});

app.get('/update_user', (req, res) => {

    res.render('update_user', {title: 'Update your profile'});
});


// offer routes

app.use('/offers', offerRoutes);
app.use('/users', userRoutes);


// 404 page

app.use((req, res)=> {

    res.status(404).render('404', { title: '404'});
});