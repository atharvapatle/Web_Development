const http = require('http');
const fs = require('fs');
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=4aa283b0dccf7e6841822edf502bc0ae', { streaming })
            .on('data', function (chunk) {
                console.log(chunk)
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
            });
    }
})