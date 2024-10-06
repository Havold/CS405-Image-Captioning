import { useEffect, useState } from "react";
import "./denoising.scss";

const Denoising = () => {
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

  const data = [
    {
      id: 1,
      image: "/assets/images/picture-01.png",
      name: "image",
    },
    {
      id: 2,
      image: "/assets/images/picture-01.png",
      name: "image",
    },
    {
      id: 3,
      image: "/assets/images/picture-01.png",
      name: "image",
    },
  ];
  return (
    <div className="denoising">
      <div className="container">
        <h1>Denoising</h1>
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
                  <span>Noisy (Gaussian)</span>
                  <img src={image.preview} alt="NoisyImage" />
                </div>
                <div className="item">
                  <span>Denoised (Mean)</span>
                  <img src={image.preview} alt="MeanDenoisedImage" />
                </div>
                <div className="item">
                  <span>Denoised (Median)</span>
                  <img src={image.preview} alt="MedianDenoisedImage" />
                </div>
              </div>
              <label htmlFor="uploadImage">Upload Image</label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Denoising;
