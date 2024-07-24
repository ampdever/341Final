const router = require('express').Router();
const passport = require('passport');

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World. This is my final.')
});

router.use('/cities', require('./cities'));
//router.use('/users', require('./users'));
router.use('/countries', require('./countries'));

// router.get('/login', passport.authenticate('github'), (req, res) => {});

// router.get('/logout', function(req, res, next) {
//     req.logout(function(err) {
//         if (err) {
//             return next(err);
//         }
//         res.redirect('/');
//     });
// });

module.exports = router;