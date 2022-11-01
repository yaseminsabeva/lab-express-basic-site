const express = require('express')
const hbs = require('hbs')
const app = express()
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('main', {
        title: 'Jinx Appreciation Site',
        style: ['layout.css', 'main.css'],
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Jinx',
        style: ['layout.css', 'about.css'],
    })
})

app.get('/works', (req, res) => {
    res.render('works', {
        title: 'Jinx\'s Works',
        style: ['layout.css', 'works.css'],
    })
})

app.listen(3000)