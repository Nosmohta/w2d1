
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }


function getHTML(options, callback){
  var https = require("https");
  let outputData = ""

  https.get(options, (response) => {
    //error handling?
    response.setEncoding("utf8");
    response.on("data", (chunk) => {
      console.log("Chunk recieved");
      outputData += chunk
    })
    response.on('end', () => {
      callback(outputData)
    })
  })

}


function printHTML(html){
  console.log(html)
}


//getHTML(requestOptions, printHTML);

module.exports = {
  getHTML : getHTML
}