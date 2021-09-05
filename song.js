const { Song } = require("./schemaModel.js");


const getOneSong = async(songId, deleteId) => {
  const song = songId ?
    await Song.findById(songId).populate('lyric') :
    await Song.findByIdAndDelete(deleteId);
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(song)
  };
  return response;
};

const songOperate = async(title) => {
  const operate = title ?
    await Song.create({ title }) :
    await Song.find().populate('lyric');
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(operate)
  };
  return response;
};


exports.handler = async(event) => {
  const { songId, deleteId } = event.queryStringParameters || {};
  const { title } = JSON.parse(event.body) || {};
  if (title) {
    return songOperate(title);
  };
  if (songId) {
    return getOneSong(songId, null);
  }
  if (deleteId) {
    return getOneSong(null, deleteId);
  }
  else return songOperate(null);
};
