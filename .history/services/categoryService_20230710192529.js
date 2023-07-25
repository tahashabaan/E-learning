const category =require("../models/category");


class Category{
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

    updateDocumentById (req, res, next){
        category
        .findByIdAndUpdate(req.params.categoryId, req.body)
        .then(cat => {
           res
           .status(204)
           .json({message:'updated category', category:cat})})
         .catch(err =>  res.status(404).json({message:'updated category', error:err}));

    }
    delDocumentById (req, res, next){
        category
        .findByIdAndRemove(req.params.categoryId)
        .then(cat => {
           console.log(cat)
         })
         .catch(err => console.log(err));

    }

};

module.exports = new Category()