const path = require('path');
const router = require('express').Router();
const {
    readFromFile,
    writeToFile,
    readAndAppend
} = require('../utils/helper');
const uuid = require('../utils/uuid');


// post requests
router.post('/api/notes', (req, res) => {

    const {
        title,
        text
    } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid()
        };
        readAndAppend(newNote, './db/db.json');
        res.json('added new note!');
    } else {
        res.error('error in adding the note');
    }
})