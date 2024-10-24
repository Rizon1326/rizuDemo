import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ImageSearch from "./components/ImageSearch";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Image Gallery & Search</h1>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8">
          <ImageUploader onImageUpload={(image) => setUploadedImages([image, ...uploadedImages])} />
          <ImageSearch />
          {uploadedImages.length > 0 && (
            <ImageGallery title="Recently Uploaded" images={uploadedImages} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;