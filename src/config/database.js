const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://wilianfsato_db_user:Babu20072004@cluster0.wxf03wp.mongodb.net/?appName=Cluster0';

async function connectDatabase(){
    await mongoose.connect(MONGO_URI);
    console.log('Conectou o banco!')
}

module.exports = connectDatabase;