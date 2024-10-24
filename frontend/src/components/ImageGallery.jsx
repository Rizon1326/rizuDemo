import React from "react";

const ImageGallery = ({ title, images }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={image.imageUrl}
                alt={image.caption}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-2">{image.caption}</p>
              
              <div className="flex flex-wrap gap-2">
                {image.album && (
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600">
                    {image.album}
                  </span>
                )}
                
                {typeof image.similarity === 'number' && (
                  <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm text-blue-600">
                    {/* Match: {(image.similarity * 100).toFixed(0)}% */}
                   
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;