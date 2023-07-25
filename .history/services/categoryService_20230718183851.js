const asyncHandler = require('express-async-handler')

const Category =require("../models/category");
const documentHamdle = require('./documents');

   exports.createCaregory = documentHamdle.insertDocument(Category);

    exports.getCategorys=  documentHamdle.getDocuments(Category);

    exports.getCategoryById =documentHamdle.getDocumentById(Category, , req.params.categoryId);

    exports.updateCategoryById =documentHamdle.updateDocumentById(Category, req.params.categoryId);
    exports.delCategoryById= documentHamdle.delDocumentById(Category, , req.params.categoryId);


