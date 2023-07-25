module.exports =
class ErrorHandle extends Error{
    constructor(message, s){
        super(message);
        this.statusCode = 400;

    }
} 