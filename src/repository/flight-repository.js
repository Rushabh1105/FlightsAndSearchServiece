
const {Flight} = require("../models/index");

class FlightRepository{

    async createFlight(data){
        try {
            console.log(data);
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Error at flight repository level");
            throw {error};
        }
    }

    async deleteFlight(){
        try {
            
        } catch (error) {
            console.log("Error at flight repository level");
            throw {error};
        }
    }

    async updateFlight(){
        try {
            
        } catch (error) {
            console.log("Error at flight repository level");
            throw {error};
        }
    }

    async getFlight(){
        try {
            
        } catch (error) {
            console.log("Error at flight repository level");
            throw {error};
        }
    }
} 


module.exports = FlightRepository;