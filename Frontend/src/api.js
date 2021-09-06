import Axios from "axios"
var url = 'https://zyq3sgi3k1.execute-api.ap-south-1.amazonaws.com/development';




export const allSong = async () => {
  return await Axios.get(url);
};

export const oneSong = async (songId) => {
  return await Axios({
    url: `${url}/oneSong?songId=${songId}`,
    method: 'GET'
  })
};

export const deleteSong = async (songId) => {
  return await Axios({
    url: `${url}/deleteSong?deleteId=${songId}`,
    method: 'GET'
  })
};

export const addlyric = async (data) => {
  return await Axios({
    url: `${url}/addlyric`,
    method: 'POST',
    data
  });
}

export const addSong = async (data) => {
  return await Axios({
    url: `${url}/addSong`,
    method: 'POST',
    data
  })
}