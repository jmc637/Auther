var session = require('express-session');
var router = require('express').Router()
router.use(session({
  // this mandatory configuration ensures that session IDs are not predictable
  secret: 'whatever', // or whatever you like
  // these options are recommended and reduce session concurrency issues
  resave: false,
  saveUninitialized: false
}));

module.exports = router
