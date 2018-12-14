import React, { Component } from 'react';
import './App.css';
import { Carousel } from 'react-bootstrap'

class MyCarousel extends Component {
  render() {
    return (
      <React.Fragment>
      <Carousel>
        <Carousel.Item>
          <img width={520} height={250} alt="520x250" src={require('./images/lvbc-1.jpg')} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={520} height={250} alt="520x250" src={require('./images/lvbc-2.jpg')} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={520} height={250} alt="520x250" src={require('./images/lvbc-3.jpg')} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </React.Fragment>
    );
  }
}

export default MyCarousel;
