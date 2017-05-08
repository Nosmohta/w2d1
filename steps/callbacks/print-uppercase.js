var HTMLfunc = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function upperCase(html){
  console.log(html.toUpperCase());
}




HTMLfunc.getHTML(requestOptions, upperCase);