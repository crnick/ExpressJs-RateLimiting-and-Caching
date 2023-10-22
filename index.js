const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

require("dotenv").config();
//store your api key on the proxy server instead of including it directly in the api

const PORT = process.env.PORT || 5000;
const app = express();

//rate limit 100 within 10 mins
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 mins, for how much time
  max: 5, // how many request
});

//in http header x-ratelimit-limit / x-ratelimit-remaining
app.use(limiter);
app.set("trust proxy", 1); // using it as proxy

app.use("/api", require("./routes/weather"));

//enable cors
app.use(cors());

app.listen(PORT, () => console.log("server started"));
