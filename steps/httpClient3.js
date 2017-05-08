var https = require("https");


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }


function getAndPrintHTML(options){


  let outputData = ""

  https.get(options, (response) => {
    //error handling?

    response.setEncoding("utf8");

    response.on("data", (chunk) => {
      console.log("Chunk recieved");
      outputData += chunk
    })

    response.on('end', () => {
      console.log("The 'end' of the data has been reached.");
      console.log(outputData)
    })



  })

}


getAndPrintHTML(requestOptions)