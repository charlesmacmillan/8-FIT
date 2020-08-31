
const User = require('../models/user');

module.exports = {
    index,
    show
}

function index(req, res, next) {
    let modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
        .sort(sortKey).exec(function(err, users) {
        if (err) return next(err);
            res.render('users/index', { users, name: req.query.name, sortKey });
    });
}

function show(req, res) {
    User.findById(req.params.id, function (err, user) {
        res.render('users/show', { user });
    });
}

