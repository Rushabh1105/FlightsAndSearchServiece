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

    async deleteCity(){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong at serviece layer");
            throw {error};
        }
    }

    async updateCity(){
        try {
            const response = await this.cityRepository.updateCity(cityId, data);
            return response;
        } catch (error) {
            console.log("something went wrong at serviece layer");
            throw {error};
        }
    }

    async getCity(){
        try {
            const response = await this.cityRepository.getCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong at serviece layer");
            throw {error};
        }
    }

}


module.exports = CityServiece;