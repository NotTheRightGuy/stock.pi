import stocks from "@/datasets/stock";

function simplifyString(str) {
    return str.toLowerCase().replace(/[^a-z0-9\s]/g, "");
}

function getTicker(input) {
    const simplifiedInput = simplifyString(input);
    for (const company of Object.keys(stocks)) {
        if (simplifyString(company).includes(simplifiedInput)) {
            return stocks[company];
        }
    }
    return null;
}

export default getTicker;
