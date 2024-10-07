import { useEffect, useState } from 'react';
import './edgeDetectors.scss'

const EdgeDetectors = () => {
  const [image, setImage] = useState(null);
  const [method, setMethod] = useState('sobel');

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

  console.log(method)

  return (
    <div className="edgeDetectors">
      <div className="container">
        <h1>Edge Detectors</h1>
        <div className="content">
          <input type="file" id="uploadImage" onChange={handleUploadFile} />
          {!image ? (
            <div className='upload'>
              <label htmlFor="uploadImage">Upload Image</label>
              <select value={method} name="method" id="method" onChange={(e) => setMethod(e.target.value)}>
                <option value="sobel">Sobel</option>
                <option value="prewitt">Prewitt</option>
                <option value="canny">Canny</option>
              </select>
            </div>
          ) : (
            <div className="result">
              <div className="items">
                <div className="item">
                  <span>Original</span>
                  <img src={image.preview} alt="originalImage" />
                </div>
                <div className="item">
                  <span>Edges Of Image</span>
                  <img src={image.preview} alt="SharpenedImage" />
                </div>
              </div>
              <label htmlFor="uploadImage">Upload Image</label>
              <select value={method} name="method" id="method" onChange={(e) => setMethod(e.target.value)}>
                <option value="sobel">Sobel</option>
                <option value="prewitt">Prewitt</option>
                <option value="canny">Canny</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EdgeDetectors