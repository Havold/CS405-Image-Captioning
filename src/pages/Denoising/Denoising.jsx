import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import "./denoising.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Denoising = () => {
  const [image, setImage] = useState(null);
  const [noiseType, setNoiseType] = useState("sparkle-noise");
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ["denoise"],
    queryFn: () => {
      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        return makeRequest
          .post("/denoising?type=" + noiseType, formData)
          .then((res) => {
            setIsLoading(false);
            return res.data;
          });
      }
      return null;
    },
  });

  const mutation = useMutation({
    mutationFn: (newImage) => {
      newImage.preview = URL.createObjectURL(newImage);
      setImage(newImage);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["denoise"] });
    },
  });

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setIsLoading(true);
      mutation.mutate(file);
    }
  };

  const handleChangeType = (e) => {
    setNoiseType(e.target.value);
    mutation.mutate(image);
  };

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image.preview);
      }
    };
  }, [image]);

  return (
    <div className="denoising">
      <div className="container">
        <h1>Denoising</h1>
        <div className="content">
          <input type="file" id="uploadImage" onChange={handleUploadFile} />
          {!image ? (
            <div className="upload">
              <label htmlFor="uploadImage">Upload Image</label>
              <select
                value={noiseType}
                name="noiseType"
                id="noiseType"
                onChange={handleChangeType}
              >
                <option value="sparkle-noise">Sparkle Noise</option>
                <option value="salt-pepper-noise">Salt And Pepper Noise</option>
                <option value="gaussian-noise">Gaussian Noise</option>
              </select>
            </div>
          ) : (
            <div className="result">
              <div className="items">
                <div className="item">
                  <span>Original</span>
                  <img src={image.preview} alt="originalImage" />
                </div>
                {error ? (
                  "Something went wrong!"
                ) : isLoading ? (
                  "Loading... "
                ) : (
                  <>
                    <div className="item">
                      <span>
                        Noisy (
                        {noiseType === "sparkle-noise"
                          ? "Sparkle"
                          : noiseType === "salt-pepper-noise"
                          ? "Salt & Pepper"
                          : "Gaussian"}
                        )
                      </span>
                      <img
                        src={"http://localhost:5000" + data.noise_image_url}
                        alt="NoisyImage"
                      />
                    </div>
                    <div className="item">
                      <span>Denoised (Mean)</span>
                      <img
                        src={
                          "http://localhost:5000" + data.mean_filtered_image_url
                        }
                        alt="MeanDenoisedImage"
                      />
                    </div>
                    <div className="item">
                      <span>Denoised (Median)</span>
                      <img
                        src={
                          "http://localhost:5000" +
                          data.median_filtered_image_url
                        }
                        alt="MedianDenoisedImage"
                      />
                    </div>
                  </>
                )}
              </div>
              <label htmlFor="uploadImage">Upload Image</label>
              <select
                value={noiseType}
                name="method"
                id="method"
                onChange={handleChangeType}
              >
                <option value="sparkle-noise">Sparkle Noise</option>
                <option value="salt-pepper-noise">Salt And Pepper Noise</option>
                <option value="gaussian-noise">Gaussian Noise</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Denoising;
