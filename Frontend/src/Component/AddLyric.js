import React, { useState } from 'react'
import { addlyric } from '../api';


const AddLyric = ({ title, getData, id }) => {
  const [lyric, setlyric] = useState('');

  const addLyric = () => {
    addlyric({ songId: id, content: lyric }).then(() => {
      getData(id);
      setlyric('');
    })
  };

  return <article className="mb-4">
    <h2 className="text-capitalize">{title}</h2>
    <h6>Add Lyrics</h6>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <input value={lyric}
        onChange={(e) => setlyric(e.target.value)}
        style={{ width: '80%' }}
        className="form-control"
        type="text"
      />
      &nbsp;&nbsp;
      <button onClick={() => addLyric()} style={{ width: '100px', letterSpacing: 1 }}
        className="btn btn-secondary">Add</button>
    </div>
  </article>
}

export default AddLyric
