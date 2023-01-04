
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

    async getAllFlight(data){
        try {
            const flights = await this.flightRepository.getAllFlight(data);
            return flights;
        } catch (error) {
            console.log("error at flight serviece layer");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log(error);
            throw {error}
        }
    }

    async updateFlight(flightId, data){
        try {
            const flight = await this.flightRepository.updateFlight(flightId, data);
            return flight;
        } catch (error) {
            console.log(error);
            throw {error}
        }
    }
}


module.exports = FlightServiece;