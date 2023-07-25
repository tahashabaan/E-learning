const category =require("../models/category");


   exports.insertDocument =(req, res, next)=>{
      category
      .create(req.body)
      .then(cat => {
        console.log(cat)
        res.status(204).json({message:'sucessfuly insert document', document:cat})
      })
      .catch(err => res.status(404).json({message:'failed insert category', error:err}));
    }

    exports.getDocuments=(req, res, next)=>{
         const {size, page} = req.query;
         size = size? size:10;
         const skip = (page-1 ) * size;
         const totalPage =
     category
     .find({})
     .limit(size)
     .skip(skip)
     .then(cat => {
        res.status(202).json({message: ' documents',results:cat.length,totalPage, documents:cat, })
      })
      .catch(err => res.status(404).json({message:'failed fetch categorys', error:err}));

    }

    exports.getDocumentById =(req, res, next)=>{
        category
        .findById(req.params.categoryId)
        .then(cat => {
            res.then(cat => res.status(204).json({message:'category', category:cat}))
         })
         .catch(err => res.catch(err =>res.status(404).json({message:'failed fetch category', error:err})) );

    }

    exports.updateDocumentById =(req, res, next)=>{
        category
        .findByIdAndUpdate(req.params.categoryId, req.body)
        .then(cat => res.status(204).json({message:'updated category', category:cat}))
         .catch(err =>res.status(404).json({message:'failed updated category', error:err}));
    }
    exports.delDocumentById= (req, res, next)=>{
        category
        .findByIdAndRemove(req.params.categoryId)
        .then(cat => {
            res.status(204).json({message:'deleted category', category:cat})
         })
         .catch(err => res.status(404).json({message:'failed delete category', error:err}));

    }



