const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('Index');
});

router.get('/about', (req,res)=>{
    res.send('About');
});

module.exports = router;