const express = require("express");
const router = express.Router();

// router.get('/', function(req, res) {
//     res.send('Home page');
// });

router.get('/testserver', function(req, res) {
    res.send({
        result: "ok"
    });
});

module.exports = router;