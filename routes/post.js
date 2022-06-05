const path = require('path');
const router = require('express').Router();
const {
    readFromFile,
    writeToFile,
    readAndAppend
} = require('../utils/helper');
const uuid = require('../utils/uuid');


router.get('/api/notes', (req, res) => {
    res.json(`${req.method} request received`);
    return res.json(notes);
})


// post requests
router.post('/api/notes', (req, res) => {
    let response;

    if (req.body && req.body.title && req.body.text) {
        response = {
            status: 'success',
            data: req.body
        };
        res.json(`${req.method} request received to add new notes`);
    } else {
        res.json('Request body must have a title and a text.')
    }

    console.info(req.body);
})