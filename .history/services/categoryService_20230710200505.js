const category =require("../models/category");



   exports.insertDocument(req, res, next){
      category
      .create(req.body)
      .then(cat => {
        res.status(204).json({message:'insert category', category:cat})
      })
      .catch(err => res.status(404).json({message:'failed insert category', error:err}));
    }

    exports.getDocuments(req, res, next){
     category
     .find({})
     .then(cat => {
        res.status(204).json({message:'categorys', categorys:cat})
      })
      .catch(err => res.status(404).json({message:'failed fetch categorys', error:err}));

    }

    exports.getDocumentById (req, res, next){
        category
        .findById(req.params.categoryId)
        .then(cat => {
            res.then(cat => res.status(204).json({message:'category', category:cat}))
         })
         .catch(err => res.catch(err =>res.status(404).json({message:'failed fetch category', error:err})) );

    }

    exportupdateDocumentById (req, res, next){
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

module.exports =  Category;