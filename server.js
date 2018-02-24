const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Vernon',
    likes: [
      'Jogging',
      'Movies',
      'Sports'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Bad boy! Bad boy!'
  });
})

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
