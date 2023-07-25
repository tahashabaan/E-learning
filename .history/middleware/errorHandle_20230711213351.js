module.exports =
class ErrorHandle extends Error{
    constructor(message){
        super(message);
        this.statusCode = 400;

    }
} 