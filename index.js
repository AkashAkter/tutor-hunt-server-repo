const express = require('express')
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());


const courses = require('./course-details.json')

app.get('/', (req, res) => {
    res.send('API in running');
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => console.log('running in', port))