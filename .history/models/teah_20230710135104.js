const mongoose = require('mongoose');

const teachSchema = mongoose.Schema({
    name:{
        type:'String',
        req:true
    }

})