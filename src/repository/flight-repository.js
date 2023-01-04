
const { Flight } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository{

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({price : {[Op.gte] : data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price : {[Op.lte] : data.maxPrice}});
        }
        Object.assign(filter, {[Op.and] : priceFilter});
        return filter;
    }
    //Private Member Function
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

    async getFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Error at flight repository level");
            throw {error};
        }
    }

    async getAllFlight(filter){
        try {
            const filterObject = this.#createFilter(filter);
            //console.log(filterObject);
            const flight = await Flight.findAll({
                where : filterObject
            });
            console.log(flight)
            return flight
        } catch (error) {
            console.log("Error at flight repository level");
            throw {error};
        }
    }

    async updateFlight(flightId, data){
        try {
            await Flight.update(data, {
                where : {
                    id : flightId,
                }
            });
            return true;
        } catch (error) {
            console.log("Error at flight repository level");
            throw {error};
        }
    }
} 


module.exports = FlightRepository;