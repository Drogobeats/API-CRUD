const Offer = require('../models/offerModel');

const offer_index = (req, res) => {
    Offer.find().sort({ createdAt: -1})
    .then((result)=>{
        res.render('index', { title: 'All Offers', offers: result})
    })
   // passport: regarder taleur
    .catch((err)=>{
        console.log(err)
    }) 
}

const offer_details = (req, res) =>{
    const id = req.params.id; // constante gardant l'ID de l'offre concernée
    Offer.findById(id)
    .then(result => {
        res.render('details', {offer: result, title: 'Offer details'});
    })
    .catch(err =>{
        console.log(err);
    });
}

const offer_create_get = (req, res) => {
    res.render('create',{title: 'Create new offer'});
}

const offer_create_post = (req, res) => {
    const offer = new Offer(req.body);

    offer.save()
    .then((result)=>{
        res.redirect('/offers');
    })
    .catch((err) => {
        console.log(err);
    });
}

const offer_delete =(req,res) =>{
    const id = req.params.id;

    Offer.findByIdAndDelete(id)
    .then(result =>{
        res.json({ redirect: '/offers' });
    })
    .catch(err => {
        console.log(err);
    });
}

const offer_update =(req,res) =>{
    const id = req.params.id;

    Offer.findByIdAndUpdate(id)
    .then(result =>{
        res.json({ redirect: '/offers' });
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = {
    offer_index,
    offer_details,
    offer_create_get,
    offer_create_post,
    offer_delete,
    offer_update,
}