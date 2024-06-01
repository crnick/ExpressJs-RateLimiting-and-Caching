const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

//store your api key on the proxy server instead of including it directly in the api
require("dotenv").config();

const PORT = 5000 || process.env.PORT;
const app = express();


//enable cors
app.use(cors());

//rate limit 100 within 10 mins
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 mins, for how much time
  max: 5, // how many request
  statusCode: 429 //default status code after limit is reached.
});

//Check the http request header x-ratelimit-limit / x-ratelimit-remaining
app.use(limiter);
app.set("trust proxy", 1); // using it as proxy

app.use("/api", require("./routes/weather"));


app.listen(PORT, () => console.log(`server running on port ${PORT} `));
