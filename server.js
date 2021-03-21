//lesitning Port
const port = 8000;

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const server = app.listen(port,()=>{console.log(`server is runing at port ${port}....`)});


app.get('/wether1',getWether);
function getWether(req,res){
    
    res.send(projectData);
}
app.post('/postwether',postwether);
function postwether(req,res){
    const data = {
        wether : req.body.temperature,
        date : req.body.date,
        userF : req.body.userresponse
    }

   projectData=data
   res.send(projectData); 

}