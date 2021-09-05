/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { allSong, deleteSong } from '../api';


const SongList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const all_song = () => {
    setLoading(true);
    allSong().then((item) => {
      setLoading(false);
      setData(item.data);
    })
  }

  useEffect(() => {
    all_song();
  }, []);


  const delete_song = (id) => {
    deleteSong(id).then(() => {
      all_song();
    })
  };


  return <section className="container">
    {
      loading
        ? <h2 className="text-center mt-5">Loading...</h2>
        : <main className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <article className="mb-4">
              <Link to="/add">
                <button className="btn btn-secondary" style={{ float: 'right' }}>Add</button>
              </Link>
              <h1 className="heading">SongList</h1>
            </article>
            {
              data.map((items, i) => {
                const { title, _id } = items;
                return <section key={i} className="title-section">
                  <li className="song-name text-capitalize">
                    <Link style={{ color: 'grey' }} to={`/song/${items._id}`}>{title} </Link>
                    <i style={{ float: 'right' }}
                      onClick={() => delete_song(_id)} className="mt-1 fas fa-trash-alt">
                    </i>&nbsp;
                  </li>
                  <br />
                </section>
              })
            }
            {
              data.length > 0 ? null : <section className="text-center" style={{ marginTop: 80 }}>
                <h3>No Data 😕</h3>
              </section>
            }
          </div>
          <div className="col-md-3"></div>
        </main>
    }
  </section>
}

export default SongList
