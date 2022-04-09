const mongoose = require ('mongoose');

 mongoose.connect('mongodb://127.0.0.1:27017/DBvote' , (err) => {
   if(!err)
   console.log('mongoDB connection succeded.');
   else
   console.log('error in DB connection : '+ JSON.stringify(err, undefined, 2));
 });

 module.exports = mongoose;
