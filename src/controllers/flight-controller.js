
const {FlightServiece} = require("../servieces/index");

const flightServiece = new FlightServiece;

const createFlight = async (req, res) => {
    try {
        const response = await flightServiece.crateFlight(req.body);
        return res.status(201).json({
            success : true,
            message : "created a flight",
            data : response,
            err : {},
        })
    } catch (error) {
        console.log("error at flight controller level");
        return res.status(500).json({
            success : false,
            message : "something went wrong",
        });
    }
}



module.exports = {
    createFlight,
}