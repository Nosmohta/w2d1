var HTMLfunc = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};



function charSwap(html){

  const replacements = [
      {Key: "a" , Value: "4"},
      {Key: "e" , Value: "3"},
      {Key: "o" , Value: "0"},
      {Key: "l" , Value: "1"},
      {Key: "s" , Value: "5"},
      {Key: "t" , Value: "7"},
      {Key: "ck" , Value: "x"},
      {Key: "er" , Value: "0r"},
      {Key: "you" , Value: "j00"}
  ]


  let output = html

  for ( let pair of replacements) {
    console.log("pair.Key: ", pair.Key)
    let RE = new RegExp( pair.Key, "g", "i");
    output = output.replace( RE, pair.Value);
  }

  console.log(output);
}




HTMLfunc.getHTML(requestOptions, charSwap);