const {Schema} = require('mongoose');

const subCategorySchema =  new Schema({
    name:{
        type:'String',
        required:true,
        unique:true
    },
    slug:{
        type:'String',
        lowercase:true
    },
    categoryId:{
        ref:Schema.type
    }

},{timestamps:true})