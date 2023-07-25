const {Schema} = require('mongoose');
import { Schema } from 'mongoose';

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
        ref:Schema
    }

},{timestamps:true})