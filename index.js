const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router.js');
const app = express();

app.use(express.json()); // Allows to use .json responses
app.use(express.urlencoded({ extended: false })); // Allows to use "x-ww-form-urlencoded" requests

app.use('/api/users', router);

app.listen(5000, () => {  // Server listening callback
    console.log('Server is running on port 5000...');
}); 

// app.get('/', (req, res) => { // Get homepage for testing
//     res.status(200).send('Home page');
// })

 
mongoose.connect(
    'mongodb+srv://admin:<Password>@mycrud.vnan8q4.mongodb.net/MyApp?retryWrites=true&w=majority&appName=MyCRUD')
    .then(() => {
        console.log('Connected!')
})
    .catch((error) => {
    console.log(`Error: ${error}`)
})
