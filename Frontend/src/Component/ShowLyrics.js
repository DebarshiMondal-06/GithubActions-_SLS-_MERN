import React from 'react';

const ShowLyrics = ({ content, _id, likes }) => {



  const on_like = (idi) => {
    // likeLyric({
    //   variables: {
    //     _id: idi
    //   }
    // })
  }

  return <section key={_id} className="title-section">
    <li className="song-name" style={{ padding: 10, marginBottom: 10 }}>
      {content}
      <span onClick={() => on_like(_id)}
        style={{ float: 'right', cursor: 'pointer' }}>
        <i className="far fa-thumbs-up"></i>&nbsp;<span style={{fontSize: 13}}>{likes}</span>&nbsp;</span>
    </li>
  </section>
}

export default ShowLyrics
