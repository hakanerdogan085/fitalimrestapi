const pool = require('../../db');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const getUsers = (req, res) => {
    pool.select('*')
        .from('USERLOGIN')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};

const getData = (req, res) => {
    pool.select('*')
        .from('alim_data')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};

const getData2 = (req, res) => {
    pool.select('*')
        .from('alim_data2')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(200).json(err);
        });
};

module.exports = {
    getUsers,getData,getData2
};


