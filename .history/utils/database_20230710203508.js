const mongoose = require( "mongoose")

console.log(process.env.DB_URI);
// module.exports= mongoose.connect(process.env.DB_URI, 
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB', error);
//   });

