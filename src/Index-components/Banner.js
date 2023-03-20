import React, { useState, useEffect } from 'react';
import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'
import banner3 from '../images/banner3.png'
import Button from '@mui/material/Button';


const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    { image: banner1, alt: 'Banner 1' },
    { image: banner2, alt: 'Banner 2' },
    { image: banner3, alt: 'Banner 3' }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBanner((currentBanner + 1) % banners.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [currentBanner]);

  const prevBanner = () => {
    setCurrentBanner((currentBanner + banners.length - 1) % banners.length);
  };

  const nextBanner = () => {
    setCurrentBanner((currentBanner + 1) % banners.length);
  };

  return (
    <>
    <div className="banner">
      <div className="arrow left-arrow" onClick={prevBanner}></div>
      <img className='banner-item'  src={banners[currentBanner].image} alt={banners[currentBanner].alt} />
      <div className="arrow right-arrow" onClick={nextBanner}></div>
    </div>

    </>
  );
};

export default Banner;
