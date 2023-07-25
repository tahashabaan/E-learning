const mongoose = require( "mongoose")

console.log(process.env.DB_URI);
module.exports= mongoose.connect('mongodb+srv://tahashabaan48:5FEvUWeNR50ymfx8@elearningsystem.p8p3ubu.mongodb.net/?retryWrites=true&w=majority', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

