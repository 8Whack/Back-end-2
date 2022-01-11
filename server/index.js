const express = require('express');
const cors = require('cors');
//const { append } = require('vary');
const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller.js')

const app = express();
app.use(express.json());
app.use(cors())

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouse);



app.listen(4000, ()=> console.log('Server up and running on 4000'));