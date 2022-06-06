const express = require('express');
const {
    clog
} = require('./middleware/clog');

const routes = require('./routes/routes')

const PORT = 3001;

const app = express();

//middleware 

app.use(clog);
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.use(routes);



app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}. and on the MOON!`)
});