import React, { Component } from 'react';
import './carousel.css';
import { Carousel } from 'react-bootstrap'

class MyCarousel extends Component {
  render() {
    return (
      <div className='carousel'>
      <Carousel
      interval={6000}
      pauseOnHover={false}
      >
        <Carousel.Item >
        <div className='image-container'>
          <img className='caro-image'  alt="1000x500" src={require('../../images/Picture1.jpg')} />
          <Carousel.Caption>
            <h3>Learn to Read</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='image-container'>
          <img className='caro-image' alt="1000x500" src={require('../../images/Picture2.jpg')} />
          <Carousel.Caption>
            <h3>Help People Learn How to Read</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='image-container'>
          <img className='caro-image' alt="1000x500" src={require('../../images/IMG_2192.JPG')} />
          <Carousel.Caption>
            <h3>Learn to Help People Learn How to Read</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='image-container'>
          <img className='caro-image' alt="1000x500" src={require('../../images/Picture4.jpg')} />
          <Carousel.Caption>
            <h3>Learn to Help People Learn How to Read</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
}

export default MyCarousel;
