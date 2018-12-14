import React, { Component } from 'react';
import './carousel.css';
import { Carousel } from 'react-bootstrap'

class MyCarousel extends Component {
  render() {
    return (
      <div className='carousel'>
      <Carousel
      interval={6000}
      >
        <Carousel.Item>
          <img width={520} height={250} alt="520x250" src={require('./images/lvbc-1.jpg')} />
          <Carousel.Caption>
            <h3>Learn to Read</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={520} height={250} alt="520x250" src={require('./images/lvbc-2.jpg')} />
          <Carousel.Caption>
            <h3>Help People Learn How to Read</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={520} height={250} alt="520x250" src={require('./images/lvbc-3.jpg')} />
          <Carousel.Caption>
            <h3>Learn to Help People Learn How to Read</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
}

export default MyCarousel;
