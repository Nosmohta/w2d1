var https = require("https");


function getAndPrintHTMLChunks(){

  var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }


// set up Client
  https.get(options, (response) => {
    //error handling?

    response.setEncoding("utf8");

    response.on("data", (data) => {
      console.log(data, '\n');
    })

    response.on('end', () => {
      console.log("The 'end' of the data has been reached.");
    })



  })

}


getAndPrintHTMLChunks()