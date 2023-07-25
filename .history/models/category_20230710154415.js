import { Schema } from "mongoose"; 


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

export default 