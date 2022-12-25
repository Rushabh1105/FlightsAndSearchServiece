const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require("./config/serverConfig")

const setupAndServer = async () => {
    //Create the express object
    const app = express();

    //Middle wares
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended : true}));

    //start server
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })

}

setupAndServer();