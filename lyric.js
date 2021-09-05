const { Song, Lyric } = require("./schemaModel.js");


const response = {
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  body: 'Success'
};

const addLyric_Song = async (songId, content) => {
  const createLyric = await Lyric.create({ content });
  if (createLyric) {
    const getSong = await Song.findById(songId);
    getSong.lyric.push(createLyric._id);
    await getSong.save();
    return response;
  }
};

const addLikes_Lyric = async (id) => {
  const getLyric = await Lyric.findById(id);
  if (getLyric && getLyric.likes) {
    getLyric.likes = getLyric.likes + 1;
    await getLyric.save();
    return response;
  }
  getLyric.likes = 1;
  await getLyric.save();
  return response;
};



exports.handler = async (event) => {
  console.log(event);
  
  const { lyric_id } = event.queryStringParameters || {};
  const { songId, content } = JSON.parse(event.body) || {};
  if (songId, content) {
    return addLyric_Song(songId, content);
  }
  if (lyric_id) {
    return addLikes_Lyric(lyric_id);
  }
};
