const category =require("../models/category");


class Category{
    constructor(req, res , next){
        this.req=req;
        this.res=res;
        this.next=next;
        // any date you taken from user
    }
    
    insertDocument(req, res, next){
      category
      .create(req.body)
      .then(cat => {
        res.status(204).json({message:'insert category', category:cat})
      })
      .catch(err => res.status(404).json({message:'failed insert category', error:err}));
    }

    getDocuments(req, res, next){
     category
     .find({})
     .then(cat => {
        res.status(204).json({message:'categorys', categorys:cat})
      })
      .catch(err => res.status(404).json({message:'failed fetch categorys', error:err}));

    }

    getDocumentById (req, res, next){
        category
        .findById(req.params.categoryId)
        .then(cat => {
            res.then(cat => res.status(204).json({message:'category', category:cat}))
         })
         .catch(err => res.catch(err =>res.status(404).json({message:'failed fetch category', error:err})) );

    }

    updateDocumentById (req, res, next){
        category
        .findByIdAndUpdate(req.params.categoryId, req.body)
        .then(cat => res.status(204).json({message:'updated category', category:cat}))
         .catch(err =>res.status(404).json({message:'failed updated category', error:err}));
    }
    delDocumentById (req, res, next){
        category
        .findByIdAndRemove(req.params.categoryId)
        .then(cat => {
            res.status(204).json({message:'deleted category', category:cat})
         })
         .catch(err => res.status(404).json({message:'failed delete category', error:err}));

    }

};

module.exports =  (req, res, next) => {
    return new Ca
};