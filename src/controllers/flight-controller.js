
const {FlightServiece} = require("../servieces/index");
const { SuccessCodes } = require("../utils/error-codes");

const flightServiece = new FlightServiece;

const createFlight = async (req, res) => {
    try {
        const response = await flightServiece.crateFlight(req.body);
        return res.status(SuccessCodes.CREATED).json({
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
            err : {error},
        });
    }
}

const getAllFlight =  async (req, res) => {
    try {
        const response = await flightServiece.getAllFlight(req.query);
        return res.status(SuccessCodes.OK).json({
            success : true,
            message : "fetched a flight",
            data : response,
            err : {},
        })
    } catch (error) {
        console.log("error at flight controller level");
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            err : {error},
        });
    }
}


module.exports = {
    createFlight,
    getAllFlight,
}