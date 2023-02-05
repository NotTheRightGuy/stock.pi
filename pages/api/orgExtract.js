const nlp = require("compromise");

const organization = (sentence) => {
    const doc = nlp(sentence);

    const organizationNames = doc.organizations();
    return organizationNames.out();
};

export default function handler(req, res) {
    const { text } = req.body;
    res.status(200).json({ Org: organization(text) });
}
