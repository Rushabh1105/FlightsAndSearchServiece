
const {Airplane} = require("../models/index");

class AirplaneRepository {
    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            //console.log(airplane.capacity);
            return airplane;
        } catch (error) {
            console.log("error at airplane repository level");
            throw {error};
        }
    }
}



module.exports = AirplaneRepository;
