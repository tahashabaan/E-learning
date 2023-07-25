const { Schema, model } from "mongoose"; 


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

export default  model('category', categorySchema);