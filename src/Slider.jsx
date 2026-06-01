
import React, { useState, useEffect } from 'react';
import './styles.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const sliderData = [
  {
    id: 1,name:"Green Headphone", price: 699.99,
    imageSrc: "/green.png",
    backgroundStyle: "radial-gradient(50% 50% at 50% 50% , #C7F6D0 0%, #7CB686 92.19%)"
  },
  {
    id: 2,name:"Blue Headphone", price: 779.99,
    imageSrc: "/blue.png",
    backgroundStyle: "radial-gradient(50% 50% at 50% 50% , #97b6cf 0%, #5498d0 100%)"
  },
  {
    id: 3,name:"Red Headphone", price: 749.99,
    imageSrc: "/red.png",
    backgroundStyle: "radial-gradient(50% 50% at 50% 50% , #fda8a5 0%, #f35951 100%)"
  },
  {
    id: 4,name:"White Headphone", price: 779.99,
    imageSrc: "/white.png",
    backgroundStyle: "radial-gradient(50% 50% at 50% 50% , #a7a7a7 0%, #787878 100%)"
  },
  {
    id: 5,name:"Black Headphone", price: 899.99,
    imageSrc: "/black.png",
    backgroundStyle: "radial-gradient(50% 50% at 50% 50% , #686868 0%, #292929 100%)"
  },
];

const totalSlides = sliderData.length;

const Products = () => {
  
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();
  const { addToCart } = useCart();
 
  
  const handleNext = () => {

    setImageIndex(prevIndex => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setImageIndex(prevIndex => (prevIndex - 1 + totalSlides) % totalSlides);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const getImageClass = (index) => {
    const prevIndex = (imageIndex - 1 + totalSlides) % totalSlides;
    const nextIndex = (imageIndex + 1) % totalSlides;

    if (index === imageIndex) {
      return 'active';
    } else if (index === prevIndex) {
      return 'prev';
    } else if (index === nextIndex) {
      return 'next';
    } else {
      return 'inactive';
    }
  };
  const currentProduct={
    id: sliderData[imageIndex].id,
    name: sliderData[imageIndex].name,
    imageSrc: sliderData[imageIndex].imageSrc,
    price: sliderData[imageIndex].price
  }
  const currentBackground = sliderData[imageIndex].backgroundStyle;
  const handleAddToCart = () => {
    addToCart(currentProduct);

  };

  return (
    <section className="slider-main" style={{ background: sliderData[imageIndex].backgroundStyle }}>
      <Navbar />

      <div className="contaner">
        <div className="logo">
          <a href="#"><img src="/logo.svg" alt="logo" /></a>
        </div>
        <div className="slider-content-wrap">
          <div className="slider-content">
            <h2 className="heading-style-2">Apple AirPods Max Wireless Over-Ear Headphones.</h2>
            <p>Active Noise Cancelling, Transparency Mode, Spatial Audio, Digital Crown For Volume Control. Bluetooth Headphones For iPhone </p>
            <h3 className="heading-style-2">${sliderData[imageIndex].price}</h3>
            <button className="Cart" onClick={handleAddToCart}>add to cart</button>
            <div className="slider-controls">
              <button className="control-btn prev-btn" onClick={handlePrev}>&lt;</button>
              <button className="control-btn next-btn " onClick={handleNext}>&gt;</button>
            </div>
            
          </div>
        </div>
      </div>
      
      <div className="slider-images">
        {sliderData.map((slide, index) => (
          <img
            key={index}
            src={slide.imageSrc}
            className={getImageClass(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;