var express = require('express');
var router = express.Router();

// Options for sending the file
var options = {
    root: __dirname + '/../static/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile('food.html', options);
//    res.send("Home");
});

module.exports = router;
