const express = require("express");

const {PORT} = require("./config/serverConfig")

const setupAndServer = async () => {
    //Create the express object
    const app = express();
    //const port = 3000;

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })

}

setupAndServer();