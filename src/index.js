const express = require('express');
const app = new express();

pushHistory = page => {
  history.pushState(null, null, page);
};

app.use(express.static('public'));

app.get('/', (response) => {
  response.sendFile(`${__dirname}/index.html`);
});

app.get('/src/:file', (request, response) => {
  const fileName = request.params['file'];
  response.sendFile(`${__dirname}/${fileName}`);
});

app.get('/modules/:module', (request, response) => {
  const module = request.params['module'];
  response.sendFile(`${__dirname}/modules/${module}`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
