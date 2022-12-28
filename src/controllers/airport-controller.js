
const {AirportServiece} = require("../servieces/index");

const airportServiece = new AirportServiece

const createAirport = async (req, res) => {
    try {
        const response = await airportServiece.create(req.body);
        return res.status(201).json({
            success : true,
            message : "created a airport",
            data : response,
            err : {},
        });

    } catch (error) {
        console.log("error at controller level");
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            err : error,
        })
    }
}





module.exports = {
    createAirport,
    
}