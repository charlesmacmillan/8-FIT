const User = require('../models/user');

module.exports = {
    new: newRoutine,
    create
}

function newRoutine(req, res, next) {
    User.findById(req.params.id, function (err, user) {
        res.render('routine/new', { user });
    });
}

function create(req, res, next) {
    User.findById(req.params.id, function (err, user) {
        req.user.routines.push(req.body);
        req.user.save(function (err) {
            res.redirect(`/users/${user._id}`);
        });
    });
}