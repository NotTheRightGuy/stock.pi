const axios = require("axios");

const options = {
    method: "GET",
    url: "https://latest-stock-price.p.rapidapi.com/price",
    params: { Indices: "NIFTY 50" },
    headers: {
        "X-RapidAPI-Key": "0537b8df84msh9ddd242f693c849p19779ajsn2a3dfeb14aba",
        "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
};

axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
