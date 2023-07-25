import category from "../models/category";


export class Category{
    constructor(){
        // any date you taken from user
    }

    insertDocument(req, res, next){
      category
      .create(req.body)
      .then(cat => {
        console.log(cat)
      })
      .catch(err => console.log(err));
    }

    getDocuments(req, res, next){
     category
     .find({})
     .then(cat => {
        console.log(cat)
      })
      .catch(err => console.log(err));

    }

    getDocumentById (req, res, next){
        category
        .findById(req.params.categoryId)
        .then(cat => {
           console.log(cat)
         })
         .catch(err => console.log(err));

    }

    getDocumentById (req, res, next){
        category
        .findById(req.params.categoryId)
        .then(cat => {
           console.log(cat)
         })
         .catch(err => console.log(err));

    }
    getDocumentById (req, res, next){
        category
        .findById(req.params.categoryId)
        .then(cat => {
           console.log(cat)
         })
         .catch(err => console.log(err));

    }

};
