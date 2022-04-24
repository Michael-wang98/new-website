import React, { useEffect, useState } from 'react';
import axios from 'axios';
import XKCD from '../styles/modules/XKCD.module.css';

export default function XKCDComicWidget() {
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latestNum, setLatestNum] = useState(null);
  const [searchNum, setSearchNum] = useState();

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
      console.log(res.data);
      setComic(res.data);
      setLatestNum(res.data.num);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  };

  const randomComic = () => {
    fetchComic(Math.floor((Math.random() * (latestNum-1)) + 1))
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
    <div className={XKCD['background']}>
      <div className={XKCD['main']}>
        <h1 className={XKCD['title']}>{comic.title}</h1>
        <div className={XKCD['buttons']} >
          <button
            className={XKCD['button']}
            disabled={comic.num <= 1 || loading}
            onClick={() => {fetchComic(1)}}>
              First
            </button>
          <button
            className={XKCD['button']} 
            disabled={comic.num <= 1 || loading}
            onClick={() => {fetchComic(comic.num - 1)}}
            >Previous
          </button>
          <button 
            className={XKCD['button']} 
            disabled={loading}
            onClick={() => {randomComic()}}
            >Random
          </button>
          <button 
            className={XKCD['button']} 
            disabled={comic.num >= latestNum || loading}
            onClick={() => {fetchComic(comic.num + 1)}}
            >Next
          </button>
          <button
            className={XKCD['button']} 
            disabled={comic.num === latestNum || loading} 
            onClick={() => {fetchLatestComic()}}
            >Last
          </button>
        </div>
        <div className={XKCD['comic']}>
          <img src={comic.img} alt={comic.title} title={comic.alt}/>
          <p>XKCD #{comic.num} Published: {comic.month}, {comic.day}, {comic.year}</p>
        </div>
        <div className={XKCD['buttons']}>
          <button 
            className={XKCD['button']} 
            disabled={comic.num <= 1 || loading}
            onClick={() => {fetchComic(1)}}
            >First</button>
          <button
            className={XKCD['button']} 
            disabled={comic.num <= 1 || loading}
            onClick={() => {fetchComic(comic.num - 1)}}
            >Previous
          </button>
          <button 
            className={XKCD['button']}
            disabled={loading}
            onClick={() => {randomComic()}}
            >Random
          </button>
          <button
            className={XKCD['button']} 
            disabled={comic.num >= latestNum || loading}
            onClick={() => {fetchComic(comic.num + 1)}}
            >Next
          </button>
          <button
            className={XKCD['button']} 
            disabled={comic.num === latestNum || loading} 
            onClick={() => {fetchLatestComic()}}
            >Last
          </button>
        </div>
        <div className={XKCD['search']}>
          <form onSubmit={() => {fetchComic(searchNum)}}>
            <label>
              Search Comic by Number
            </label>
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
              className={XKCD['button']}
              type="submit"
              value="Submit"
              >Find</button>
          </form>
        </div>
      </div>
    </div>
  );
};