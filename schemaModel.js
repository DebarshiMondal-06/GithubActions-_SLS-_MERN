const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://mern-stack:mondal11@mern.zbgib.mongodb.net/LyricSongDB';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connection succesfull!"))
  .catch((err) => console.log("Error Connecting", err));



const lyricSchema = new mongoose.Schema({
    content: String,
    likes: Number
});
const Lyric = mongoose.model('Lyric', lyricSchema);



const songSchema = new mongoose.Schema({
    title: String,
    lyric: [{
        type: mongoose.Schema.ObjectId,
        ref: "Lyric"
    }]
});
const Song = mongoose.model('Song', songSchema);





module.exports = { Song, Lyric };
