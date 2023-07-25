const documentHandle = require('./documents');
const DisCount = require('../models/course');
const {uploadImage} = require('../middleware/uploadFile');



exports.createCode = documentHandle.insertDocument(DisCount);

exports.getCodes = documentHandle.getDocuments(DisCount);
// exports.getCodeById =documentHandle.getDocumentById(Course)
// exports.updateCodeById =documentHandle.updateDocumentById(Course)
// exports.delCodeById= documentHandle.delDocumentById(Course)




