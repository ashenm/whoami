/**
 * Request Header Parser Microservice
 * Returns user-agent OS, IP address, and language
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const express = require('express');
const app = express();

app.all('/', (request, response) => {
  response.json({
    ipaddress: request.ip,
    language: request.acceptsLanguages()[0],
    software: (request.get('User-Agent').match(/[^\(]{1,}(?=\))/) || [request.get('User-Agent')])[0] 
  });
});

app.listen(process.env.PORT || 8080);
