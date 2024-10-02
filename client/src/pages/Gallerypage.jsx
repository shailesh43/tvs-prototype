import React from 'react';
import './Gallery.css';

const WildlifeGallery = () => {
  const images = [
    { src: 'https://images.pexels.com/photos/3498323/pexels-photo-3498323.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Lions' },
    { src: 'https://images.pexels.com/photos/3355480/pexels-photo-3355480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Seagull' },
    { src: 'https://images.pexels.com/photos/3739324/pexels-photo-3739324.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Elephants' },
    { src: 'https://images.pexels.com/photos/631228/pexels-photo-631228.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Deer' },
    { src: 'https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Clownfish' },
    { src: 'https://images.pexels.com/photos/26690635/pexels-photo-26690635/free-photo-of-fluffy-arctic-fox-lying-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Arctic fox' },
    { src: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Panda' },
    { src: 'https://images.pexels.com/photos/2629372/pexels-photo-2629372.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Hummingbird' },
    { src: 'https://images.pexels.com/photos/27835791/pexels-photo-27835791/free-photo-of-majestatisches-nashorn.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'African Rhino' },
    { src: 'https://images.pexels.com/photos/9913451/pexels-photo-9913451.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Tamarin Monkey' },
    { src: 'https://images.pexels.com/photos/4749959/pexels-photo-4749959.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Ducklings' },
    { src: 'https://images.pexels.com/photos/8049744/pexels-photo-8049744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Alantic Spadefish' },
    { src: 'https://images.pexels.com/photos/10041625/pexels-photo-10041625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Alligator' },
    { src: 'https://images.pexels.com/photos/7892295/pexels-photo-7892295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Baboon' },
    { src: 'https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Tiger' },
    { src: 'https://images.pexels.com/photos/3640872/pexels-photo-3640872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Bison' },
    { src: 'https://images.pexels.com/photos/2575692/pexels-photo-2575692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Flamingo' },
    { src: 'https://images.pexels.com/photos/7001092/pexels-photo-7001092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Zebra'},
    { src: 'https://images.pexels.com/photos/10015932/pexels-photo-10015932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Black Squirrel' }
  ];

  return (
    <div className="wildlife-gallery">
      <h1>Wildlife Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className={`gallery-item item-${index + 1}`}>
            <img src={image.src} alt={image.alt} />
            <div className="image-caption">{image.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WildlifeGallery;
