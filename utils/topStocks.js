const AV_KEY = process.env.NEXT_PUBLIC_AV_KEY;
const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${AV_KEY}`;
import axios from "axios";

async function getData() {
    const response = await axios.get(url);
    const data = response.data;
    return data;
}

async function getAllData() {
    const data = await getData();
    return {
        topGainer: data["top_gainers"],
        topLoser: data["top_losers"],
        topTraded: data["most_actively_traded"],
        lastUpdated: data["last_updated"],
    };
}

export default getAllData;
