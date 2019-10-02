

const express = require('express');

const validateUser = require("../auth/validateUser");
const validateUserId = require("../auth/validateUserId");
const validatePosts = require("../auth/validatePosts");
const users = require("./userDb.js");
const posts = require("../posts/postDb.js");

const router = express.Router();

router.post('/', validateUser, (req, res) => {
    users.insert(req.body)
        .then(item => res.json(item))
        .catch(err => console.log(err))
});

router.post('/:id/posts', validatePosts, (req, res) => {
    posts.insert(req.body)
        .then(newPost => res.json(req.body))
        .catch(err => res.json(err))
});

router.get('/', validateUserId, (req, res) => {
    users.get()
        .then(results => res.json(results))
        .catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
 
    const id = req.params.id;
    users.getById(id)
        .then(results => res.json(results))
        .catch(err => console.log("oops!", err))
});

router.get('/:id/posts', (req, res) => {
    users.getUserPosts(req.params.id)
        .then(results => {res.json(results)})
        .catch(err => res.send(err))

});

router.delete('/:id', (req, res) => {
    users.remove(req.params.id)
        .then(results => {
            res.json(results);
        })
});

router.put('/:id', validateUserId, (req, res) => {
    users.update(req.params.id, req.body)
        .then(updates => res.json(req.body))
        .catch(err => res.json({err}))
});

//custom middleware




module.exports = router;
