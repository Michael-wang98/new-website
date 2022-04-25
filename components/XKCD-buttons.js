import React, { useEffect, useState } from 'react';
import XKCD from '../styles/modules/XKCD.module.css';

export default function XKCDButtons ({fetchComic, number, latestNum}) {
    return (
        <div className={XKCD['buttons']}>
          <button
            className={XKCD['button']}
            disabled={number <= 1}
            onClick={() => {fetchComic(1)}}>
              First
          </button>
          <button
            className={XKCD['button']} 
            disabled={number <= 1}
            onClick={() => {fetchComic(number - 1)}}
            >Previous
          </button>
          <button 
            className={XKCD['button']} 
            onClick={() => {fetchComic(Math.floor((Math.random() * (latestNum-1)) + 1))}}
            >Random
          </button>
          <button 
            className={XKCD['button']} 
            disabled={number >= latestNum}
            onClick={() => {fetchComic(number + 1)}}
            >Next
          </button>
          <button
            className={XKCD['button']} 
            disabled={number === latestNum} 
            onClick={() => {fetchLatestComic()}}
            >Last
          </button>
        </div>
    );
}