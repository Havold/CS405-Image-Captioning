import { useEffect, useState } from 'react';
import './sharpening.scss'
import { makeRequest } from '../../axios';

const Sharpening = () => {
  const [image, setImage] = useState(null);
  const [sharpenedImage, setSharpenedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleUploadFile = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
      setImage(file);
      
      const formData = new FormData();
      formData.append('image', file)

      console.log(formData)
      
      const result = await makeRequest.post('/sharpening', formData).then(res => res.data.sharpened_image_url)
      console.log(result)
      setSharpenedImage(result);
    }
    setIsLoading(false);

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
                  {isLoading ? 'Loading...' : <img src={'http://localhost:5000' + sharpenedImage} alt="sharpenedImage" />}
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