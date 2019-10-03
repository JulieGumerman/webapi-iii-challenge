const users = require("../users/userDb.js");

function validateUserId(req, res, next) {
    const id = req.headers.id;
    const userid = users.getById(id);

    if (!id || !userid) {
       return res.status(401).json({ message: "Oh noes!!!"})
    } 
        

    next();

};

module.exports = validateUserId;