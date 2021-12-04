const { validationResult } = require("express-validator");
const createProxyMiddleware = require('http-proxy-middleware');

const axios = require('axios');

const allPhotos = async(req, res, next) => {
    console.log('here');

    axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.ACCESSKEY}`).then((result) => {
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
    axios.get(`https://api.unsplash.com/search/photos?&query=${req.query.filter}&client_id=${process.env.ACCESSKEY}`).then((result) => {
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
// :