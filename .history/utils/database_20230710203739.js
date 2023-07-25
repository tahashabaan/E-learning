const mongoose = require( "mongoose")

console.log(process.env.DB_URI);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log('Connected to MongoDB', error.message);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB');
  });

