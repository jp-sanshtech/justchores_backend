const express = require('express');
const router = express.Router();
const { 
    getHomeServices, 
    getMenSalon, 
    getWomenSalon, 
    getServiceById, 
    getServicesByCategoryId 
} = require('../controllers/serviceController');

router.get('/get-home-services', getHomeServices);
router.get('/get-men-salon', getMenSalon);
router.get('/get-women-salon', getWomenSalon);
router.get('/service/:id', getServiceById);
router.get('/category/:categoryId', getServicesByCategoryId);

module.exports = router;
