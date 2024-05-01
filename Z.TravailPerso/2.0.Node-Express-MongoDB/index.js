const express = require("express"); //Importation du framework Express
const app = express(); //Instantiation du Framework
const PORT = process.env.PORT || 5000; // Sur quel port tournera notre application

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const config = require("./database/configDB");

app.use(express.json()); // L'ensemble des reponse du serveur seront au format JSON

const lessonSchema = schema({
    title : String,
    chapter : [{type : schema.ObjectId, ref : "chapters"}]
});

const Lessons = mongoose.model("lessons", lessonSchema);

const chapterSchema = schema({
    title : String,
    difficulty : Number,
    index : Number,
});

const newLesson = new Lessons({
    title : "Mongoose",
})
newLesson
    .save()
    .then((n1) => {
        Chapters.findOne({title : "NodeJS"}).then((chapter) => {
            chapter.lessons.push(n1._id)
            chapter.save();
        });
    })
    .catch ((err) => console.log(err));

const Chapters = mongoose.model("chapters", chapterSchema);

const newChapter = new Chapters({
    title : "NodeJS",
    nbrOfLesson : 20,
    difficulty : 9,
    index : 1,
    active : true,
});

newChapter.chapter.push(newLesson);
newChapter
    .save()
    .then((chapter) => console.log(chapter))
    .catch((err) => console.log(err));

Lessons.find({chapter : "660a759565ddcca9b15f5cbf"})
.then((doc) => console.log(doc))
.catch((err) => console.log(err))

mongoose
.connect(config.mongoDB.uri)
.then(() => {
    console.log("Connection mongoDB OK");
    Chapters.find().then((data) => {
        console.log(data);
    })
})
.catch((err) => console.log(err));

const routes = require("./routes");
app.use(routes);

app.get("/", (req, res) =>{
    res.send("Hello World")
})

// Ecoute l'activité du port cité
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

Chapters.find({})
    .sort({ difficulty : -1, title : 1})
    .skip(2)
    .limit(2)
    .select("-difficulty")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err))

Chapters.findOne({ title : "Wordpress"})
.then((chapter) => {
    const newLesson = new Lessons({
        title : "Le fonctionnement de WordPress",
        chapter : chapter._id,
    });
    newLesson.save()
})
.catch((err) => console.log(err))


Chapters.findOneAndUpdate(
    {title : "MongoDB"},
    {$set : {difficulty : 10}},
    {new : true}
)
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err))
