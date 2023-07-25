import { Schema } from "mongoose"; 


const categorySchema = new Schema({
    title:{
        type:'String',
        required:true,
        unique:true
    },
    slug:{
        
    }
}, {timestamps:true});