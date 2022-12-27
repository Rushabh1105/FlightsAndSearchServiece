
const { FlightRepository, AirplaneRepository} = require("../repository/index");
const { compareTime} = require("../utils/helper");

class FlightServiece{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async crateFlight(data){
        try {
            console.log(data.arrivalTime);
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error : "Arrival time cannot be less than departure time"};
            }

            
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