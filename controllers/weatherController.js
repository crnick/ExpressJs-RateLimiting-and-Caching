const needle = require("needle");
const url = require("url");

//environment variables
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;
const API_BASE_URL = process.env.API_BASE_URL;

const getWeatherData = async (req, res) => {
    //use req.query as url.parse is deprecated
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query, // query params passed from the client side
        });
        const apiResp = await needle("get", `${API_BASE_URL}?${params}`);
        const apiBody = apiResp.body;
        res.status(200).json({ data: apiBody });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
export default getWeatherData