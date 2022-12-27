
const { FlightRepository, AirplaneRepository} = require("../repository/index");

class FlightServiece{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async crateFlight(data){
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, seats: airplane.capacity});
            return flight;
        } catch (error) {
            console.log("error at flight serviece layer");
            throw {error};
        }
    }
}


module.exports = FlightServiece;