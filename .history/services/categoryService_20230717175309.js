const asyncHandler = require('express-async-handler')

const Category =require("../models/category");
const ErrorHandle = require('../utils/errorHandle');
const documentHamdle = require('./documents');

   exports.createCaregory = documentHamdle.insertDocument(Category);

    exports.getCategorys=  documentHamdle.getDocuments(Category);

    exports.getCategoryById =documentHamdle.getDocuments(Category);

    exports.updateCategoryById =documentHamdle.upda(Category);
    exports.delCategoryById= =documentHamdle.delDocumentById(Category);


