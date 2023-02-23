const pool = require('../../db');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const getUsers = (req, res) => {
    pool.select('*')
        .from('userlogin')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};

const getData = (req, res) => {
    pool.select('*')
        .from('cequipment')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};

const getDataFilter = (req, res) => {

    const sEquipmentcategory = req.params.equipmentcategory;
    pool.select('*')
        .from('cequipment')
        .where('equipmentcategory', '=', sEquipmentcategory)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};

const getDataCoordinates = (req, res) => {
    pool.select('latitude','longitude','equipment')
        .from('cequipment')
        .where('longitude', '!=', '0.000000',"AND",'latitude', '!=', '0.000000')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};

const getDataMake = (req, res) => {
    pool('cequipment').distinct('fglcmake')
    .where('fglcmake', '!=', '')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};

const getDataProductLine = (req, res) => {
    pool('cequipment').distinct('fglcprodline')
    .where('fglcprodline', '!=', '')    
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};

const getDataCategory = (req, res) => {
    pool('cequipment').distinct('fglccategory')
    .where('fglccategory', '!=', '')   
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};

const getDataModel = (req, res) => {
    pool('cequipment').distinct('fglcmodel')
    .where('fglcmodel', '!=', '')   
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};


module.exports = {
    getUsers, getData, getDataFilter,getDataCoordinates,getDataModel,getDataCategory,getDataProductLine,getDataMake
};


