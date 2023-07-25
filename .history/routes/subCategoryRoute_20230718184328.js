const { Router } =require("express");

const subCategoryService = require("../services/subCategoryService");

const {createSubCategoryValidated, 
       getSubCategoryValidated, 
       updateSubCategoryValidated, 
       delSubCategoryValidated} = require('../utils/validated/subCategory');

const router = Router({mergeParams:true});


router
.route('/')
.get(subCategoryService.getDocuments)
.post(subCategoryService.setCategoryIdToBody,
     createSubCategoryValidated,
     subCategoryService.insertDocument)

router
.route('/:id')
.get(getSubCategoryValidated,
     subCategoryService.getDocumentById)
.put(updateSubCategoryValidated,
     subCategoryService.updateDocumentById)
.delete(delSubCategoryValidated,
        subCategoryService.delDocumentById)

module.exports= router