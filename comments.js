// Create web server to handle comments
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.json({ status: 'success', message: 'Comment added' });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

