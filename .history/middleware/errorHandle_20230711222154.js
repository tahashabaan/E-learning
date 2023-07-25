module.exports =
class ErrorHandle extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = 400;

    }
} 