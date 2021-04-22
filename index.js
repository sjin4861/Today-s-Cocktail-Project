const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/cocktail', function(req,res){
  var request = require('request');
  var options = {
    method: 'GET',
    url: 'http://thecocktaildb.com/api/json/v1/1/random.php',
    headers: {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))