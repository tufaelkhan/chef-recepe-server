const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefInfo = require('./data/chef.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('chef are comming')
});

app.get('/chef', (req, res) => {
    res.send(chefInfo)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id
    // console.log(id);
    const selectedChef = chefInfo.find(n => n.id === id)
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`woirewrueorori ${port}`)
})