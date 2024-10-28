const redis = require("redis");
const express = require("express");
const app = express();

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

app.get("/", (req, res) => {
    client.incr("visits", (err, visits) => {
        res.send(`Visits: ${visits}`);
    });
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});