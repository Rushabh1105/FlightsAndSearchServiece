const { CityServiece } = require("../servieces/index");

const cityServiece = new CityServiece;

const createCity = async (req, res) => {
    try {
        const response = await cityServiece.createCity(req.body);
        return res.status(201).json({
            success : true,
            message : "created a city",
            data : response,
            err : {},
        });

    } catch (error) {
        console.log("error at controller level");
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            err : error,
        })
    }
}

const deleteCity = async (req, res) => {
    try {
        const response = await cityServiece.deleteCity(req.params.id);
        return res.status(200).json({
            success : true,
            message : "deleted a city",
            data : response,
            err : {},
        });
    } catch (error) {
        console.log("error at controller level");
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            err : error,
        })
    }
}

const updateCity = async (req, res) => {
    try {
        const response = await cityServiece.updateCity(req.params.id, req.body);
        return res.status(200).json({
            success : true,
            message : "updated a city",
            data : response,
            err : {},
        });
    } catch (error) {
        console.log("error at controller level");
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            err : error,
        })
    }
}

const getCity = async (req, res) => {
    try {
        const response = await cityServiece.getCity(req.params.id);
        return res.status(200).json({
            success : true,
            message : "fetched a city",
            data : response,
            err : {},
        });
    } catch (error) {
        console.log("error at controller level");
        return res.status(500).json({
            success : false,
            message : "something went wrong",
        })
    }
}

const getAllCity = async (req, res) => {
    try {
        const response = await cityServiece.getAllCity(req.query);
        return res.status(200).json({
            success : true,
            message : "fetched a city",
            data : response,
            err : {},
        });
    } catch (error) {
        console.log("error at controller level");
        return res.status(500).json({
            success : false,
            message : "something went wrong",
        })
    }
}

module.exports = {
    createCity,
    deleteCity,
    updateCity,
    getCity,
    getAllCity,
}