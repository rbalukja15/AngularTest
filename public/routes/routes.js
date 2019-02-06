const express       = require('express');
const router        = express.Router();

const axios         = require('axios'); //for http requests 

// const PostAPI       = 'https://jsonplaceholder.typicode.com'; //API for json data
const PostAPI = 'https://api.github.com/users/rbalukja15/repos';

//Get posts
router.get('/login', (req,res) => {
    res.render('login');
});

router.get('/posts' , (req, res) => {
    axios.get(`${PostAPI}`).then(posts => {
        res.status(200).json(posts.data);
    }).catch(error => {
        console.log(error.response);
    });
});

module.exports = router;