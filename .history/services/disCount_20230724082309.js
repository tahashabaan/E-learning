const documentHandle = require('./documents');
const DisCount = require('../models/course');
const {uploadImage} = require('../middleware/uploadFile');



exports.createCode = documentHandle.insertDocument(DisCount);

exports.getCodes = documentHandle.getDocuments(DisCount);
exports.getCodeById =documentHandle.getDocumentById(DisCount)
exports.updateCodeById =documentHandle.updateDocumentById(DisCount)
exports.delCodeById= documentHandle.delDocumentById(DisCount)




