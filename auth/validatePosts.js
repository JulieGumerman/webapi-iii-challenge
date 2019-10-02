function validatePost(req, res, next) {
    const post = req.body;

    if (!post) {
        res.status(400).json({message: "missing post data"})
    } else if (!post.text) {
        res.status(400).json({message: "missing required text field"})
    }
};

module.exports = validatePost;