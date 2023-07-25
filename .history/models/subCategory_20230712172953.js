const {Schema, model} = require('mongoose');

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
        type:Schema.Types.ObjectId,
        ref:'category',
        required:true
    }
},{timestamps:true})

module.exports = model('subCategory', subCategorySchema);