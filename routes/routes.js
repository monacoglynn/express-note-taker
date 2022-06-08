const path = require('path');
const router = require('express').Router();
const {
    readFromFile,
    writeToFile,
    readAndAppend
} = require('../utils/helper');
const uuid = require('../utils/uuid');

// get routes
router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

router.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})


//post route
router.post('/api/notes', (req, res) => {

    const {
        title,
        text
    } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid()
        };
        readAndAppend(newNote, './db/db.json');
        res.json('added new note!');
    } else {
        res.error('error in adding the note');
    }
});

//delete route

router.delete(`/api/notes/:id`, (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => {
            const dbData = JSON.parse(data);
            const result = dbData.filter((note) => note.id !== noteId);
            writeToFile('./db/db.json', result);
            res.json(`Item ${noteId} has been deleted`);
        })
});


module.exports = router;