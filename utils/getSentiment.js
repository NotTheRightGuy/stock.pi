const AV_KEY = process.env.NEXT_PUBLIC_AV_KEY;
import axios from "axios";

export default async function getSentiment(org) {
    const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${org}&apikey=${AV_KEY}")`;
    const response = await axios.get(url);
    const data = response.data.feed;
    let totalSentiment = 0;
    let num_articles = 0;
    for (let i = 0; i < data.length; i++) {
        totalSentiment += parseFloat(data[i]["overall_sentiment_score"]);
        num_articles++;
    }
    const avgSentiment = totalSentiment / num_articles;

    let sentimentLabel;

    if (avgSentiment <= -0.35) {
        sentimentLabel = "Bearish | Very Negative | Strong Sell";
    } else if (avgSentiment <= -0.15) {
        sentimentLabel = "Somewhat Bearish | Negative | Sell";
    } else if (avgSentiment <= 0.15) {
        sentimentLabel = "Neutral";
    } else if (avgSentiment <= 0.35) {
        sentimentLabel = "Somewhat Bullish | Positive | Buy";
    } else {
        sentimentLabel = "Bullish | Very Positive | Strong Buy";
    }

    const returnBody = {
        average_sentiment: Math.round(avgSentiment * 100) / 100,
        sentiment_label: sentimentLabel,
        articles_link: [
            {
                link: data[0]["url"],
                title: data[0]["title"],
                banner: data[0]["banner_image"],
            },
            {
                link: data[1]["url"],
                title: data[1]["title"],
                banner: data[1]["banner_image"],
            },
            {
                link: data[2]["url"],
                title: data[2]["title"],
                banner: data[2]["banner_image"],
            },
        ],
    };
    return returnBody;
}
