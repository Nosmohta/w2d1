var HTMLfunc = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function lowerCase(html){
  console.log(html.toLowerCase());
}




HTMLfunc.getHTML(requestOptions, lowerCase);