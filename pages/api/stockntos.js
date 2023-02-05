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
    const { name } = req.body;
    const symbol = nameToSymbol(name);
    res.status(200).json({ symbol });
}
