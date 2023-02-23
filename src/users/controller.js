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
    pool.select('latitude longitude')
        .from('cequipment')
        
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};


module.exports = {
    getUsers, getData, getDataFilter,getDataCoordinates
};


