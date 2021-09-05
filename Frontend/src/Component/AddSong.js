import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { addSong } from '../api';


const AddSong = () => {
  const history = useHistory();
  const [song, setSong] = useState('');
  const [btnLoader, setBtnLoader] = useState(false);

  
  const set_song = () => {
    setBtnLoader(true);
    addSong({ title: song }).then(() => {
      setSong('');
      setBtnLoader(false);
      setTimeout(() => {
        history.push('/');
      }, 1000);
    })
  };



  return <section className="add-song">
    <h2>Create a Song</h2>
    <main style={{ width: '50%' }}>
      <div className="mt-2">
        <label>Song Name: {song}</label>
        <input
          value={song}
          onChange={(e) => setSong(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Type here" />
      </div>
      <Link to="/"><button className="btn btn-dark">Back</button></Link>&nbsp;
      <button type="submit" onClick={() => set_song()} className="btn btn-primary">Add
        <article className={`${btnLoader ? 'loader' : 'fas fa-check'}`}></article>
      </button>
    </main>
  </section>
}

export default AddSong
