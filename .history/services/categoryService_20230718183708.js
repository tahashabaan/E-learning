const asyncHandler = require('express-async-handler')

const Category =require("../models/category");
const documentHamdle = require('./documents');

   exports.createCaregory = documentHamdle.insertDocument(Category);

    exports.getCategorys=  documentHamdle.getDocuments(Category);

    exports.getCategoryById =documentHamdle.getDocumentById(Category, categoryId);

    exports.updateCategoryById =documentHamdle.updateDocumentById(Category, categoryId);
    exports.delCategoryById= documentHamdle.delDocumentById(Category, categoryId);


