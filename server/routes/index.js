const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.render('index');
});

router.get('/api', (request, response) => {
    response.json({
        "Hello": "World"
    });
});

module.exports = router;