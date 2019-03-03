const express = require(`express`);

const app = express();

app.get(`/`, (request, response) => {
  response.send({
    learn: "coding express for the first time"
  });
});

const PORT = process.env.PORT || 5000; // for deveolepment envirement we use 5000 , for production whatever port heroku give to us

app.listen(PORT);
