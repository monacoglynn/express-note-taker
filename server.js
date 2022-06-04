const express = require('express');
const path = require('path');
const {
    clog
} = require('./middleware/clog');
const notes = require('./db/db');

const PORT = 3001;

const app = express();

//middleware 

app.use(clog);
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

//get requests
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// });

app.get('/api/notes', (req, res) => {
    res.json(`${req.method} request received`);
    console.info(`${req.method} request received`);
    return res.json(notes);
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

//post requests
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add new notes`);
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

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}. and on the MOON!`)
});