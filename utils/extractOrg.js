import stocks from "@/datasets/stock";

function extractCompanyName(sentence) {
    const words = sentence.toLowerCase().split(/\W+/); // Split sentence into words

    for (const company in stocks) {
        const companyWords = company.toLowerCase().split(/\W+/);

        for (const word of words) {
            if (companyWords.includes(word)) {
                return company;
            }
        }
    }

    return null;
}

export default extractCompanyName;
