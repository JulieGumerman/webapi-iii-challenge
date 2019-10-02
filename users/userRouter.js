

const express = require('express');

const validateUser = require("../auth/validateUser");
const validateUserId = require("../auth/validateUserId");
const users = require("./userDb.js");

const router = express.Router();

router.post('/', validateUser, (req, res) => {
    users.insert(req.body)
        .then(item => res.json(item))
        .catch(err => console.log(err))
});

router.post('/:id/posts', validateUserId, (req, res) => {

});

router.get('/', (req, res) => {
    users.get()
        .then(results => res.json(results))
        .catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
    // const id = req.params.id;
    // users.get(id)
    //     .then(results => res.json(results))
    //     .catch(err => console.log(err))
    const id = req.params.id;
    users.get(id)
        .then(results => res.json(results))
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', validateUserId, (req, res) => {

});

//custom middleware




module.exports = router;
