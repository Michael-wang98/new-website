import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import XKCD from '../styles/modules/XKCD.module.css';
import XKCDButtons from '../components/XKCD-buttons';

export default function XKCDComicWidget() {
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latestNum, setLatestNum] = useState(null);
  const [searchNum, setSearchNum] = useState();

  // Use a cors-anywhere instance running from a heroku dyno to attach CORS headers to API requests
  const cors = 'https://murmuring-anchorage-90283.herokuapp.com'; 
  const URL = 'https://xkcd.com';
  const suffix = 'info.0.json';
  
  useEffect(() => {
    fetchLatestComic();
  }, []);

  const fetchComic = (num) => {
    setLoading(true);
    axios.get(`${cors}/${URL}/${num}/${suffix}`).then(res => {
      setComic(res.data);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  };

  const fetchLatestComic = () => {
    axios.get(`${cors}/${URL}/${suffix}`).then(res => {
      setComic(res.data);
      setLatestNum(res.data.num);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  };

  if (loading) {
    return(
      <div className={XKCD['background']}>
        <div className={XKCD['main']}>
          <div className={XKCD['loading-spinner']}></div>
        </div>
      </div>
    )
  }

  if (!comic) {
    return(<div>Error...</div>)
  }

  return(
    <div className={XKCD.background}>
      <Head>
        <title>XKCD Mockup</title>
        <link rel="icon" href="/XKCD.ico"/>
        <meta name="description" content="A mockup of the XKCD website using the XKCD API"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="axios, React, CORS, XKCD API, CSS"></meta>
      </Head>
      <div className={XKCD.main}>
        <h1 className={XKCD.title}>{comic.title}</h1>
        <XKCDButtons
          fetchComic={fetchComic}
          number={comic.num}
          loading={loading}
          latestNum={latestNum}>
        </XKCDButtons>
        <div className={XKCD.comic}>
          <img src={comic.img} alt={comic.title} title={comic.alt}/>
          <p>XKCD #{comic.num} Published: {comic.month}, {comic.day}, {comic.year}</p>
        </div>
        <XKCDButtons
          fetchComic={fetchComic}
          number={comic.num}
          loading={loading}
          latestNum={latestNum}>
        </XKCDButtons>
        <div className={XKCD.search}>
          <form onSubmit={() => {fetchComic(searchNum)}}>
            <label>
              Search Comic by Number
            </label>
            <div className={XKCD['search-controls']}>
              <input
                disabled={loading}
                type="number"
                min="1"
                max={latestNum}
                onChange={(e) => {setSearchNum(e.target.value)}}
                placeholder="Comic #"
                required>
              </input>
              <button
                disabled={loading}
                className={XKCD.button}
                type="submit"
                value="Submit"
                >Find
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};