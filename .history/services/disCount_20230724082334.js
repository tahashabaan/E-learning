const documentHandle = require('./documents');
const DisCount = require('../models/course');



exports.createCode = documentHandle.insertDocument(DisCount);
exports.getCodes = documentHandle.getDocuments(DisCount);
exports.getCodeById =documentHandle.getDocumentById(DisCount)
exports.updateCodeById =documentHandle.updateDocumentById(DisCount)
exports.delCodeById= documentHandle.delDocumentById(DisCount)




