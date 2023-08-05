const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const SubCategory = require("../models/subCategory");
const ErrorHandle = require("../utils/errorHandle");
const apiFeature = require("../utils/api");

exports.setCategoryIdToBody = (req, res, next) => {
  if (!req.body.categoryId) req.body.categoryId = req.params.categoryId;
  next();
};

exports.filterObj = (filter) => (req, res, next) => {
  req.filterObj = {};
  if (req.params.categoryId)
    req.filterObj = { categoryId: req.params.categoryId };
  next();
};
exports.insertDocument = (doc) =>
  asyncHandler(async (req, res, next) => {
    const document = await doc.create(req.body);
    if (document)
      return res
        .status(204)
        .json({ message: "sucessfuly insert document", document });

    next(
      new ErrorHandle({ message: "failed insert document", statusCode: 404 })
    );
  });

exports.getDocuments = (doc) =>
  asyncHandler(async (req, res, next) => {
    //pagination
    new  
    let { size, page } = req.query;
    size = size ? +size : 10;
    page = page ? +page : 1;
    const skip = (page - 1) * size;
    const totalPage = Math.ceil((await doc.countDocuments()) / size);

    const documentBuild = 
    doc
    .find(req.filterObj)
    .limit(size)
    .skip(skip);
    
    const document = await documentBuild;
    if (!document) {
      return next(
        new ErrorHandle({ message: "failed fetch documents", statusCode: 404 })
      );
    }

    res.status(202).json({
      message: " documents",
      results: document.length,
      current_page: page,
      totalPage,
      documents: document,
    });
  });

exports.getDocumentById = (doc) =>
  asyncHandler(async (req, res, next) => {
    const document = await doc.findById(req.params.id);
    if (!document) {
      return next(
        new ErrorHandle({ message: "failed fetch document", statusCode: 404 })
      );
    }

    res.status(202).json({
      message: " document",
      document,
    });
  });

exports.updateDocumentById = (doc) =>
  asyncHandler(async (req, res, next) => {
    const document = await doc.findByIdAndUpdate(req.params.id, req.body);
    if (!document)
      return next(
        new ErrorHandle({ message: "failed updated document", statusCode: 404 })
      );

    res.status(204).json({ message: "updated document", document });
  });
exports.delDocumentById = (doc) =>
  asyncHandler(async (req, res, next) => {
    const document = await doc.findByIdAndRemove(req.params.id);
    if (!document)
      return next(
        new ErrorHandle({ message: "failed removed document", statusCode: 404 })
      );
    res.status(204).json({ message: "document deleted", document });
  });
