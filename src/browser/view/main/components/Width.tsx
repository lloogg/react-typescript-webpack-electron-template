import React, { useState, useEffect } from 'react';

export default function Width() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);
  return <div>windowWidth : {windowWidth}</div>;
}
