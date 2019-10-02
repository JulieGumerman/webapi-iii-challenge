function validateUserId(req, res, next) {
    const id = req.headers.id;

    if (!id ) {
       return res.status(401).json({ message: "Oh noes!!!"})
    } 
        

    next();

};

module.exports = validateUserId;