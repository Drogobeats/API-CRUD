const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    wage: {
        type: String,
        required: true
    },
    contract: {
        type : String,
        required: true
    }
}, {timestamps: true });




const Offer = mongoose.model('Offer', offerSchema);
module.exports = Offer