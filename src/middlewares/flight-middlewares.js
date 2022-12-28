
const validateCreateFlight = async (req, res, next) => {
    if(
        !req.body.flightNumber,
        !req.body.airplaneId,
        !req.body.departureAirport,
        !req.body.arrivalAirport,
        !req.body.departureTime,
        !req.body.arrivalTime,
        !req.body.price
    ){
        return res.status(400).json({
            data : {},
            success : false,
            message : "Invalid request body",
            err : "missing mandatory information",
        })
    }

    next();
}





module.exports = {
    validateCreateFlight,
}