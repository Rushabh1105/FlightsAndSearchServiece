const {Op} = require("sequelize")

const {City} = require("../models/index");

class CityRepository{

    /* constructor(){

    } */

    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async deleteCity (cityId){
        try {
            await City.destroy({
                where : {
                    id : cityId,
                }
            });
            return true;
        } catch (error) {
            throw {error};
        }
    }

    async updateCity(cityId, data){
        try {
            /* const city = await City.update({name : data.name}, {
                where: {
                    id : cityId,
                }
            }); */
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async getAllCity(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name,
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            throw {error}
        }
    }
}



module.exports = CityRepository;