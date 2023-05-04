require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


const url = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBNAME}.4yoyjob.mongodb.net/test`;

const connection = async () => {
    try{
        await mongoose.connect(url);
        console.log("DataBase is connected!!!")
    }catch(err) {
        console.log("ERROR => ", err);
    }
}

module.exports = connection;