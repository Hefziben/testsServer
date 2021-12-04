const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const unsplashController = require('../controllers/unsplash-controller')

router.get(`/photos`, unsplashController.allPhotos);
router.get(`/filterPhotos`, unsplashController.filterPhotos);

module.exports = router;