import React, { Component } from 'react';
import '../App.css';
import image1 from '../imgs/cafe.jpg';
import image2 from '../imgs/navodaya.jpg';
import image3 from '../imgs/robotec.jpg';

class ImageSwap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [image1, image2, image3],
      currentImage: 0,
    };
  }

  componentDidMount() {
    // Automatically switch images every 3 seconds
    this.interval = setInterval(this.nextImage, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextImage = () => {
    this.setState((prevState) => {
      const nextIndex = (prevState.currentImage + 1) % prevState.images.length;
      return { currentImage: nextIndex };
    });
  };

  render() {
    const { images, currentImage } = this.state;

    return (
      <div className="image-swap-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`image ${index === currentImage ? 'active' : ''}`}
          />
        ))}
      </div>
    );
  }
}

export default ImageSwap;
