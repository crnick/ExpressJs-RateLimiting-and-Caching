const express = require("express");
const apiCache = require("apicache");
const {getWeatherData} = require("../controllers/weatherController")

const router = express.Router();
//use it as a middleware 
// cache-control = max-age header property
//for this amount of time it will give as cache response
let cache = apiCache.middleware; 

router.get("/", cache("2 mins"),getWeatherData)

module.exports = router;
