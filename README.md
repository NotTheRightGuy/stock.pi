# Stock.Pi

![](/public/stockpi.png)
Welcome to Stock.pi, your trusted partner in stock market analysis! At Stock.pi, we understand the complexities and uncertainties of the stock market. That's why we've created a cutting-edge chatbot-powered Market Sentiment Analysis Tool to help you make well-informed decisions when it comes to your investments.

With Stock.pi, you have a powerful ally at your fingertips. Our chatbot leverages advanced sentiment analysis techniques to provide you with valuable insights into market trends, sentiment, and predictions.

Explore Stock.pi's intuitive chatbot and gain a competitive edge in the stock market. Start predicting and analyzing stock market trends with confidence. Your financial success is just a conversation away!

### Table of Contents

-   [Deployment](#Deployment)
-   [Installation](#Installation)
-   [Usage](#Usage)
-   [Features](#Features)
-   [Contributing](#Contributing)
-   [License](#License)

### Deployment

Stock.pi is deployed on [Vercel](https://vercel.com/). You can access the deployed version of the app [here](https://stock-pi-nottherightguy.vercel.app).

### Installation

To get started with the **Stock.pi** project, follow these simple installation steps:

1. Clone the Git repository to your local machine using the following command:

    ```bash
    git clone https://github.com/NotTheRightGuy/stock.pi && cd stock.pi
    ```

2. Install dependencies using the following command:

    ```bash
    npm install
    ```

### Usage

1. Run the server using the following command:

    ```bash
    npm run dev
    ```

2. Navigate to localhost:3000 (type the following in your browser)

    ```bash
    localhost:3000
    ```

### Tech Stack

-   [React](https://reactjs.org/)
-   [Next.js](https://nextjs.org/)
-   [Node](https://nodejs.org/en/)
-   [Firebase](https://firebase.google.com/)
-   [Sass](https://sass-lang.com/)

### API Reference

-   [Alpha Vantage](https://www.alphavantage.co/) provides free APIs for realtime and historical data on stocks, forex (FX), and digital/crypto currencies. We also provide over 150 fundamental indicators and technical indicators such as SMA, RSI, Bollinger Bands, MACD, and more.

### Stock.pi Features

![Landing Page](https://i.ibb.co/ZSdH3h5/Untitled.png)

StockPi offers a comprehensive set of features designed to enhance your stock market analysis and investment experience:

1. User Authentication:

![Sign up Page](https://i.ibb.co/JpRjq23/Sign-Up.png)

> Secure and private access to your stock market analysis tools.
> Your data and details are protected, ensuring that they are not accessible to other users.

2. User-Friendly Dashboard:

![Dashboard](https://i.ibb.co/p0SGhZv/Dashboard.png)

> A user-friendly and intuitive dashboard provides a quick overview of your stock market activities and investments.
> Get a snapshot of your portfolio's performance and important statistics at a glance.

3. Starred Favorites:

![Starred](https://i.ibb.co/hHtQRzQ/SAtarred.png)

> Quickly access and organize essential information by starring or favoriting stocks.
> Keep track of the stocks and data that matter most to you with ease.

4. Advanced Market Sentiment Analysis:

![Sentiment](https://i.ibb.co/qF7NQCw/Sentiment.pnglocal)

> Utilize cutting-edge sentiment analysis tools to gauge market sentiment and predict stock market trends.
> Make data-backed decisions by assessing market sentiment before investing.

5. Top Stocks:

![Stocks](https://i.ibb.co/JcdpD2j/Stocks.png)

> Get a quick overview of the top stocks in the market. Be it top gainers, top losers, or most active stocks, we've got you covered.

### Contributing

To contribute to the **Stock.pi** project, follow these steps:

1. Fork this repository.
2. Create a .env file in the root directory and add the following: (You will need to get an API key from [Alpha Vantage](https://www.alphavantage.co/) to use the app)

    ```bash
    AV_KEY=<YOUR_API_KEY_FROM_ALPHA_VANTAGE>
    ```

3. Create a branch: `git checkout -b <branch_name>`.
4. Make your changes and commit them: `git commit -m '<commit_message>'`
5. Push to the original branch: `git push origin <project_name>/<location>`
6. Create a pull request.

## Issues

To report issues, bugs, or requests for additional features, please submit an issue on the [Stock.pi](https://github.com/NotTheRightGuy/stock.pi/issues) repository.

## License

This code has been released under the [MIT](https://opensource.org/licenses/MIT) License.
