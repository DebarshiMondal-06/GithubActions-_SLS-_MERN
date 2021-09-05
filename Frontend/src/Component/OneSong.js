/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { oneSong } from '../api';
import AddLyric from './AddLyric';
import ShowLyrics from './ShowLyrics';


const OneSong = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [lyric, setLyric] = useState([]);


  const getData = (songId) => {
    oneSong(songId).then((el) => {
      setLoading(false);
      setTitle(el.data.title);
      setLyric(el.data.lyric);
    });
  };

  useEffect(() => {
    getData(id);
  }, []);


  if (loading) {
    return <section className="mt-5 text-center">
      Loading...
    </section>
  }
  return <section className="container-sm">
    <main className="row mt-5">
      <div className="col-md-2"></div>
      <div className="col-md-1">
        <Link to="/"><i className="fas fa-2x fa-long-arrow-alt-left"></i></Link>
      </div>
      <div className="col-md-6">
        <AddLyric getData={getData} title={title} id={id} />
        <article>
          <h5 style={{ fontFamily: 'cursive', marginTop: 40 }}>Available Lyrics</h5>
          <div className="mt-4">
            {
              lyric && lyric.map((item, i) => {
                return <ShowLyrics key={i} {...item} />
              })
            }
            {
              lyric && lyric.length > 0 ? null : <section className="text-center mt-5">
                <p>No Lyrics Found! 😕</p>
              </section>
            }
          </div>
        </article>
      </div>
      <div className="col-md-3"></div>
    </main>
  </section>
}

export default OneSong;
