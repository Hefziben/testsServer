const { validationResult } = require("express-validator");
const createProxyMiddleware = require('http-proxy-middleware');
require('dotenv').config()

const axios = require('axios');
const apiUrl = process.env.API
const accessKey = process.env.ACCESS_KEY

const allPhotos = async(req, res, next) => {
    console.log('here');

    axios.get(`${apiUrl}/photos/?client_id=${accessKey}&per_page=9`).then((result) => {
        console.log(result.data);
        res.json({
            msessage: 'ok',
            data: result.data
        })
    }).catch((err) => {
        console.log(err);
    });
}

const filterPhotos = async(req, res, next) => {
    console.log('here');
    console.log(req.params);
    console.log(req.query.filter);
    // &filter=${req.query.filter} client_id=${process.env.ACCESSKEY}
    axios.get(`${apiUrl}/search/photos?&query=${req.query.filter}&client_id=${accessKey}&per_page=9`).then((result) => {
        // console.log(result.data);
        res.json({
            msessage: 'ok',
            data: result.data
        })
    }).catch((err) => {
        console.log(err.response.statusText);
    });
}
exports.allPhotos = allPhotos;
exports.filterPhotos = filterPhotos;
// -----------------------------------
//  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