// 4 - here's our index page
const indexPage = `
<html>
  <head>
    <title>Random Number Web Service</title>
  </head>
  <body>
    <h1>Random Number Web Service</h1>
    <p>
      Random Number Web Service - the endpoint is here --> 
      <a href="/random-number">random-number</a> or <a href="/random-number?max=10">random-number?max=10</a>
    </p>
  </body>
</html>`;

// 5 - here's our 404 page
const errorPage = `
<html>
  <head>
    <title>404 - File Not Found</title>
  </head>
  <body>
    <h1>404 - File Not Found</h1>
    <p>
     Check your URL, or your typing!!
    </p>
  </body>
</html>`;

const getHTMLResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(indexPage);
  response.end();
};

const getErrorResponse = (request, response, params) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.write(errorPage);
  response.end();
};

module.exports.getHTMLResponse = getHTMLResponse;

module.exports.getErrorResponse = getErrorResponse;
