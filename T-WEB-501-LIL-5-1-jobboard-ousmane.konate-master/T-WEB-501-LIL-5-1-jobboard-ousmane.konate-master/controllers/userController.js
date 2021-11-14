const User = require('../models/userModel');
const axios = require('axios');





const user_index = (req, res) => {
    User.find().sort({ createdAt: -1})
    .then((result)=>{
        res.render('users', { title: 'All Users', users: result})
    })
   // passport: regarder taleur
    .catch((err)=>{
        console.log(err)
    });
}

const user_details = (req, res) =>{
    const id = req.params.id; // constante gardant l'ID de l'offre concernée
    User.findById(id)
    .then(result => {
        res.render('user-details', {user: result, title: 'User details'});
    })
    .catch(err =>{
        console.log(err);
    });
}

const user_create_get = (req, res) => {
    res.render('add-user',{title: 'Create new user'});
}

const user_create_post = (req, res) => {
    const user = new User(req.body);

    user.save()
    .then((result)=>{
        res.redirect('/users');
    })
    .catch((err) => {
        console.log(err);
    });
}

const user_delete =(req,res) =>{
    const id = req.params.id;

    User.findByIdAndDelete(id)
    .then(result =>{
        res.json({ redirect: '/users' });
    })
    .catch(err => {
        console.log(err);
    });
}


const user_update = (req, res) =>{
    const id = req.params.id; // constante gardant l'ID de l'offre concernée
    User.findOneAndUpdate(id)
    .then(result => {
        res.render('update_user', {user: result, title: 'User update'});
    })
    .catch(err =>{
        console.log(err);
    });
}




module.exports = {
    user_index,
    user_details,
    user_create_get,
    user_create_post,
    user_delete,
    user_update,
};