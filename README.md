# NodeRateLimitCache

This is a small project created using Express JS, in which we are fetching the weather details using an API, for which
needle package is being utilized. The Route in the project have been setup using Express JS, while simultaneously utilizing the rate limiting and api cache packages alongside it.

# SetUp
A separate folder for routes is being created which redirects all the incoming get requests. A apicache package is being
utilized as a middleware where we mention how long we want to cache the responses. This is done by passing it as an additional parameter when receving the incoming request.

Also for the rate limiting we have utilized it in the main Index.js file. We have also used it as an middleware by mentioning how many requests to rate limit within given amount of time.

# Technologies Used
This project is build using Node JS and Express JS, while also using the promise based needle package for sending http request.