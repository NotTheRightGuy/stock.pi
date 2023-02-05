const nlp = require("compromise");
const request = require("request");
const apiKey = "T9GQH5VS4VMD77P7";

const organization = (sentence) => {
    const doc = nlp(sentence);

    const organizationNames = doc.organizations();
    return organizationNames.out();
};

const data = {
    microsoft: "MSFT",
    apple: "AAPL",
    google: "GOOGL",
    amazon: "AMZN",
    facebook: "FB",
    tesla: "TSLA",
    netflix: "NFLX",
    nvidia: "NVDA",
    amd: "AMD",
    paypal: "PYPL",
    visa: "V",
    mastercard: "MA",
    disney: "DIS",
    walmart: "WMT",
    costco: "COST",
    target: "TGT",
    mcdonalds: "MCD",
    starbucks: "SBUX",
    chipotle: "CMG",
    dominos: "DPZ",
    "coca-cola": "KO",
    pepsi: "PEP",
    budweiser: "BUD",
    cocacola: "KO",
    pepsi: "PEP",
    nike: "NKE",
    adidas: "ADDYY",
    "under armour": "UAA",
    puma: "PUM.DE",
    nike: "NKE",
    adidas: "ADDYY",
    "under armour": "UAA",
    puma: "PUM.DE",
    nike: "NKE",
    reliance: "RELIANCE.NS",
    tata: "TATA.NS",
    infosys: "INFY.NS",
    hdfc: "HDFCBANK.NS",
    sbi: "SBIN.NS",
    icici: "ICICIBANK.NS",
    axis: "AXISBANK.NS",
    kotak: "KOTAKBANK.NS",
    bajaj: "BAJFINANCE.NS",
    hdfc: "HDFC.NS",
    bajaj: "BAJAJFINSV.NS",
    tcs: "TCS.NS",
    wipro: "WIPRO.NS",
    hcl: "HCLTECH.NS",
    tech: "TECHM.NS",
    larsen: "LT.NS",
    adani: "ADANIPORTS.NS",
    asian: "ASIANPAINT.NS",
    axis: "AXISBANK.NS",
    bajaj: "BAJAJ-AUTO.NS",
    bajaj: "BAJAJFINSV.NS",
    bajaj: "BAJFINANCE.NS",
    bajaj: "BAJAJHLDNG.NS",
    bajaj: "BAJAJHIND.NS",
    bajaj: "BAJAJELEC.NS",
};

const nameToSymbol = (name) => {
    name = name.toLowerCase();
    const symbol = data[name];
    return symbol;
};

export default function handler(req, res) {
    const { inputText } = req.body;
    const org = organization(inputText);
    if (org.length == 0) {
        res.status(200).json({
            msg: "Sorry I was not able to find any stock information from your input, you might want to repharse the sentence to make it easier for me as I'm stil learning",
        });
    } else {
        const symbol = nameToSymbol(org);
        console.log(symbol);
        var url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const value = data["Time Series (5min)"];
                const lastClosingValueArray =
                    value[Object.keys(value)[Object.keys(value).length - 1]];
                let lastClosingValue = lastClosingValueArray["4. close"];
                lastClosingValue = parseFloat(lastClosingValue);
                // console.log(lastClosingValue);
                // console.log(symbol);
                request.post(
                    "http://localhost:3000/api/wordsentiment",
                    { json: { text: symbol } },
                    (error, resOut, body) => {
                        if (!error && resOut.statusCode == 200) {
                            let sentimentValue = body["sentiment"];
                            sentimentValue = parseFloat(sentimentValue);
                            let emotion = "";
                            if (sentimentValue > 3) {
                                emotion =
                                    "highly positive. You may consider buying/holding the stock";
                            } else if (
                                sentimentValue < 3 &&
                                sentimentValue > 0
                            ) {
                                emotion =
                                    "moderatly positive. The stock is a good buy, which may not result very high returns but is a safe bet";
                            } else if (sentimentValue == 0) {
                                emotion =
                                    "neutral sentiment. The stock is neither a good buy nor a bad buy";
                            } else if (
                                sentimentValue < 0 &&
                                sentimentValue > -3
                            ) {
                                emotion =
                                    "moderatly negative sentiment. The stock is a bad buy, which may not result very high losses but is a safe bet";
                            } else if (sentimentValue < -3) {
                                emotion =
                                    "highly negative sentiment. You may consider selling the stock";
                            }

                            let repsonseText =
                                "The closing stock price of " +
                                org +
                                " was " +
                                lastClosingValue +
                                " and market sentiment turns out to be " +
                                emotion;
                            res.status(200).json({
                                msg: repsonseText,
                            });
                        }
                    }
                );
            });
    }
}
