const { Schema, model } =require ("mongoose"); 


const categorySchema = new Schema({
    name:{
        type:'String',
        required:true,
        unique:true
    },
    slug:{
        type:'String',
        loweracase:true
    }
}, {timestamps:true});

module.expor model('category', categorySchema);