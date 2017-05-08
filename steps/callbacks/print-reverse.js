var HTMLfunc = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


function lowerCase(html){
  let reverse = html.split("").reverse().join("");

  console.log(reverse);
}




HTMLfunc.getHTML(requestOptions, lowerCase);