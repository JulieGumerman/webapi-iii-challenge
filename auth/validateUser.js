function validateUser(req, res, next) {
    const user = req.body;
    // if (!user) {
    //     res.status(400).json({message: "missing user data"})
    // }
    // else if (!user.name) {
    //     res.status(400).json({message: "missing name field"})
    // } else {
    //     next();
    //}
    if (user) {
        if(!user.name) {
            res.status(400).json({message: "missing name field"})
        } else {
            res.json(user)
        }
    } else {
        res.status(400).json({ message: "missing user data"})
    }

    next();
};

module.exports = validateUser;