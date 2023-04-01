const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
// app - our express server (represents Express app object),
const app = express();

/** Make everything inside of public/ available
 * Express looks up the files relative to the
 * static directory, so the name of the static
 * directory is not part of the URL.
 *
**/
app.use(express.static('public'));

/**
 * @function get() - the HTTP verb/method needed to access this page,
 * @param $url
 * @param $callback
 *
 * request- REQUIRED - request here represents the HTTP request. It is an object that contains
 * all the request information, including the request parameters, the headers,
 * the body of the request, and more,
 *
 * response- REQUIRED - response is the HTTP response object that we’ll send
 * to the client. It is an object and contains information about the response,
 * such as headers and any data we need to send to the client,
 *
 * next- OPTIONAL - represents the next middleware function
 * that will be executed. We will use it
 * later to handle errors. This argument is optional
 * and can be skipped if not being used.
 *
 */
app.get('/', (request, response, next) => {
  return response.sendFile(__dirname + '/views/home-page.html')
});

// cat route:
app.get('/cat', (request, response, next) => {
  return response.sendFile(__dirname + '/views/cat-page.html')
});

/**
 * Get the server to continuously listen for requests
 * on port 3000. Callback is optional
 */
app.listen( 3000, () => {
  console.log('My first app listening on port 3000! ')
});

