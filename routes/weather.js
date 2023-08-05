const express = require("express");
const needle = require("needle");
const url = require("url");
const apiCache = require("apicache");

const router = express.Router();

//env var
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;
const API_BASE_URL = process.env.API_BASE_URL;

let cache = apiCache.middleware; //use it as a middleware // cache-control = max-age header property
//for this amount of time it will give as cache response

router.get("/", cache("2 mins"), async (req, resp) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query, // query params passed from the client side
    });

    const apiResp = await needle("get", `${API_BASE_URL}?${params}`);
    const apiBody = apiResp.body;
    resp.status(200).json({ data: apiBody });
  } catch (error) {
    resp.status(500).json({ message: error });
  }
});

module.exports = router;
