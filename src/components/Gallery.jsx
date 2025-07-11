import React from 'react';

function Gallery({ images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Project image ${index + 1}`}
          className="w-full h-64 object-cover rounded"
        />
      ))}
    </div>
  );
}

export default Gallery;
