const express   = require('express');
const app       = express();
const path      = require('path');
const port      = process.env.PORT || 3000;

//Getting the posts routes
const routes     = require('./public/routes/routes');

//MidleWares
app.use(express.static(path.join(__dirname, 'dist/TestProject')));
app.use('/routes', routes);

//Catch all the routs to the app
app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/TestProject/index.html'));
}); 

app.listen(port , (req, res) =>{
    console.log('Listening on port: ' + port);
});