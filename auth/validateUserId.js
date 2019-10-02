function validateUserId(req, res, next) {
    const userid = req.params.id;

    if (!userid || userid !== req.params.user_id) {
       return res.status(401).json({ message: "Oh noes!!!"})
    } 
        

    next();
};

module.exports = validateUserId;