const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are on posts');
});

router.get('/specific', (req, res) => {
    res.send('Specific post');
}); 
//this will wire up as localhost:5000/posts/example, 
//middleware comes first

router.post('/', (req, res) => {
    console.log(req.body); //delete once Postman decides to work

    // const post = new Post({
    //     title: req.body.title,
    //     description: req.body.description
    // });

    // post.save()
    // .exec()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err => {
    //     res.json({message: err});
    // });
});

module.exports = router;