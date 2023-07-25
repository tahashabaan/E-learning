module.exports =
class ErrorHandle extends Error{
    constructor(message, stat){
        super(message);
        this.statusCode = 400;

    }
} 