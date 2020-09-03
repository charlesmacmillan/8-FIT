
const User = require('../models/user');
const Routine = require('../models/routine');

module.exports = {
    index,
    show
}

function index(req, res, next) {
    let modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
    let sortKey = req.query.sort || 'name';
    if (req.user) {
        res.locals.userId = req.user._id;
    }
    User.find(modelQuery)
        .sort(sortKey).exec(function(err, users) {
        if (err) return next(err);
            res.render('users/index', { users, name: req.query.name, sortKey });
    });
}

function show(req, res) {
    User.findById(req.params.id, function (err, user) {
        Routine.find({ user: user._id }, function (err, routines) {
            res.render('users/show', { user, routines });            
        })
    });
}

