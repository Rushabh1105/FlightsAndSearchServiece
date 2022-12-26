const { CityRepository } = require("../repository/index");

class CityServiece {
    constructor(){
        this.cityRepository = new CityRepository;
    }

    async createCity(data){
        try {
            const response = await this.cityRepository.createCity(data);
            return response;
        } catch (error) {
            console.log("something went wrong at serviece layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong at serviece layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){
        try {
            const response = await this.cityRepository.updateCity(cityId, data);
            return response;
        } catch (error) {
            console.log("something went wrong at serviece layer");
            console.log(error)
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const response = await this.cityRepository.getCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong at serviece layer");
            throw {error};
        }
    }

    async getAllCity(filter){
        try {
            const response = await this.cityRepository.getAllCity({name : filter.name});
            return response;
        } catch (error) {
            console.log("something went wrong at serviece layer");
            throw {error};
        }
    }

}


module.exports = CityServiece;