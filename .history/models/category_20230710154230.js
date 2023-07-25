import { Schema } from "mongoose"; 


const categorySchema = new Schema({
    title:{
        type:'String',
        required:true,
        unique:true
    },
    slug:{
        type:'String',
        lowe
    }
}, {timestamps:true});