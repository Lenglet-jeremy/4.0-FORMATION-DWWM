const express = require("express")
const MongoClient = require ("mongodb").MongoClient

let count;

const MongoUrl = process.env.NODE_ENV === "production" ? "" : "mongodb://db"
// `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PWD}@db`

const client = new MongoClient(MongoUrl)

client.connect().then(() =>{
    console.log("CONNEXION DB OK");
    count = client.db("test").collection("count");
})
.catch((err) => console.log(err))

const app = express();

app.get(`/api/count`, (req, res) => {
    count.findOneAndUpdate({}, { $inc: {count: 1}}, {
        returnNewDocument: true,
        upsert: true,
    })
    .then(() => {
        console.log(doc);
        res.status(200).json(doc.count);
    })
})

app.all("*", (req, res) => {
    res.status(404).end();
});

app.listen(80)