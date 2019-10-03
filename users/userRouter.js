

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
        .catch(err => res.status(500).json({ message: "Oh noes!!!"}))
});

router.post('/:id/posts', validateUserId, validatePosts, (req, res) => {
    posts.insert(req.body)
        .then(newPost => res.json(req.body))
        .catch(err => res.status(500).json({ message: "Ooops. It didn't work"}))
});

router.get('/', validateUserId, (req, res) => {
    users.get()
        .then(results => res.json(results))
        .catch(err => res.status(500).json({message: "Ooops! It didn't work."}))
});

router.get('/:id', validateUserId, (req, res) => {
 
    const id = req.params.id;
    users.getById(id)
        .then(results => res.json(results))
        .catch(err => res.status(500).json({ message: "We could not retrieve that information"}))
});

router.get('/:id/posts', validateUserId, (req, res) => {
    users.getUserPosts(req.params.id)
        .then(results => {res.status(200).json(results)})
        .catch(err => res.status(500).json({message: "We could not retrieve those posts."}))

});

router.delete('/:id', validateUserId, (req, res) => {
    users.remove(req.params.id)
        .then(results => {
            res.json(results);
        })
        .catch(err => res.status(500).json({message: "We could not delete this content."}))
});

router.put('/:id', validateUserId, (req, res) => {
    users.update(req.params.id, req.body)
        .then(updates => res.json(req.body))
        .catch(err => res.status(500).json({message: "Do not pass Go. Do not collect $200."}))
});

//custom middleware




module.exports = router;
