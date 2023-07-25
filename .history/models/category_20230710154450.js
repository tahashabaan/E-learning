import { Schema, model } from "mongoose"; 


const categorySchema = new Schema({
    title:{
        type:'String',
        required:true,
        unique:true
    },
    slug:{
        type:'String',
        loweracase:true
    }
}, {timestamps:true});

const categorySchema = new Schema({
    export default  model('category', )