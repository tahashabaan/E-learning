const {Schema, Model} = require('mongoose');

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
        
    }
},{timestamps:true})

module.exports = Model('subCategory', subCategorySchema);