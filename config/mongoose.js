const mongoose = require('mongoose');


// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGOURI);
 
const db = mongoose.connection;


db.on('error',console.error.bind('error!!'));

db.once('open',function(){
    console.log('Successfully connected to database :: MongoDB');
});

module.exports = db;