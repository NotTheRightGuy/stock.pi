var request = require("request");
const apiKey = "T9GQH5VS4VMD77P7";
var url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=${apiKey}`;
request.get(
    {
        url: url,
        json: true,
        headers: { "User-Agent": "request" },
    },
    (err, res, data) => {
        if (err) {
            console.log("Error:", err);
        } else if (res.statusCode !== 200) {
            console.log("Status:", res.statusCode);
        } else {
            // data is already parsed as JSON:
            console.log(data);
            // res.status(200).json({ data });
        }
    }
);
