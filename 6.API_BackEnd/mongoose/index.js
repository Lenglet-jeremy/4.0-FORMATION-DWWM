const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chapterSchema = schema({
    title: String,
    nbrLesson: {type: Number, required: true},
    difficulty: Number,
    done: Boolean,
    infos: {
        author: String,
        dete: {type: Date, default: Date.now()},
    },
});

const Chapters = mongoose.model("chapters", chapterSchema);

mongoose.connect("mongodb+srv://lengletjeremyperso:fXKL2IMeZw8H7NMJ@cluster0.u2ypzgo.mongodb.net/learning?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connexion OK");
    // Chapters.find({}).then((data) => console.log(data));

    // Creéation et sauvegarde d'un modèle
    // const newChapter = new Chapters({
    //     active: true
    // });
    // newChapter.title = "SQL";
    // newChapter.nbrLesson = 5;
    // newChapter.difficulty = 6.5;
    // newChapter.done = false;
    // newChapter.infos.author = "John Doe";
    // newChapter.save().then((doc) => console.log(doc)).catch((err) => console.log(err));
// Récuparation du premier document
// Chapters.findOne({})
// .then((doc) => console.log(doc))
// .catch((err) => console.log(err))


// Récuparation du document précisé
// Chapters.findOne({title: "React Native"})
//     .then((doc) => console.log(doc))
//     .catch((err) => console.log(err))

// Modification d'un element
// Chapters.findOneAndUpdate(
//     {title:"MongoDB"}, 
//     {
//         $set: {
//     difficulty: 7,
//     done: true,
//     },
// }, 
//     {new: true}
// )
//     .then((doc) => console.log(doc))
//     .catch((err) => console.log(err));

//Recupérer le nombre de documents
// Chapters.countDocuments({
//     difficulty: {$lt: 9},
// })
// .then((count) => console.log(count))
// .catch((err) => console.log(err))

// Requete avec conditions
Chapters.find()
.sort({difficulty: -1, title: 1})
.skip(2)
.limit(2)
.select("-difficulty")
.then((data) => console.log(data))
.catch((err) => console.log(err));

})

.catch((err) => console.log(err));