import React from 'react';
import { useState, useEffect } from 'react';

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWindowWidth() {
      console.log('resized!');
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', watchWindowWidth);
    return function () {
      console.log('cleanning up!');
      window.removeEventListener('resize', watchWindowWidth);
    };
  }, []);

  return <h1>window width: {windowWidth}</h1>;
}
