//make sure express is install
const express = require("express");
//create a express app
const app = express();
//set the port
const port = 3000;

//serve static files(eg, .html .js etc) from the folder "public" for the code of you express app
app.use(express.static("public"));

// Start the server
app.listen(port),
  () => {
    console.log(`app listening on localhost:${port}`);
  };
// End of the server code for Aluben go to "public" folder for front-end code
