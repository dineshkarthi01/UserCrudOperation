const express = require('express');
const app = express();
const userRoutes = require ('./userRoutes');

//parse the json 
app.use(express.json());

//mount the user routes
app.use('/', userRoutes);

//server running
app.listen(3000,() => {
    console.log('server is running on port 3000')
});