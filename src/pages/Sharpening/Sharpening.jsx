import { useEffect, useState } from 'react';
import './sharpening.scss'

const Sharpening = () => {
  const [image, setImage] = useState(null);

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
      setImage(file);
    }
  };

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image.preview);
      }
    };
  }, [image]);

  return (
    <div className="sharpening">
      <div className="container">
        <h1>Sharpening</h1>
        <div className="content">
          <input type="file" id="uploadImage" onChange={handleUploadFile} />
          {!image ? (
            <label htmlFor="uploadImage">Upload Image</label>
          ) : (
            <div className="result">
              <div className="items">
                <div className="item">
                  <span>Original</span>
                  <img src={image.preview} alt="originalImage" />
                </div>
                <div className="item">
                  <span>Sharpened Image</span>
                  <img src={image.preview} alt="SharpenedImage" />
                </div>
              </div>
              <label htmlFor="uploadImage">Upload Image</label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sharpening