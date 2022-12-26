const express = require('express');
const bodyParser = require("body-parser");

const {PORT} = require("./config/serverConfig");

const apiRouter = require("./routes/index");
//const db = require("./models/index");

const setupAndStartServer = async () => {
    //Create the express object
    const app = express();

    //Middle wares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use("/api", apiRouter);

    app.get('/', async (req, res) => {
        res.send.json('Hello World');
      })
    //start server
    app.listen(PORT,async () => {
        console.log(`Server started at ${PORT}`);
        //await City.create({name : "New Delhi"});

    })

}
setupAndStartServer();

