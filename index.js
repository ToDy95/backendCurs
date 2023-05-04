const express = require('express');
const cors = require('cors');
const app = express();

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
const dbConn = require('./dababase/database');
dbConn();
const routes = require('./routes/routes')
app.use(cors());
app.use(express.json());
require('dotenv').config();


// routers folder

app.use('/api', routes)

//
app.get("/" ,(req, res ) =>{
  res.send("SALUT");
})


app.listen(process.env.PORT, () => {
  console.log("Server listen at port 3000")
})