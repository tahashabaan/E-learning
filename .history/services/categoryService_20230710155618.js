import category from "../models/category";


export class Category{
    constructor(){
        // any date you taken from user
    }

    insertDocument(req, res, next){
      category
      .create(req.body)
      .then(cat => {
        console.log(cat)
      })
      .catch(err => console.log(err));
    }

    getDocuments(req, res, next){
     category
     .find()

    }

};
