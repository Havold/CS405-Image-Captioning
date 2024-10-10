import { useEffect, useState } from "react";
import "./sharpening.scss";
import { makeRequest } from "../../axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Sharpening = () => {
  const [image, setImage] = useState(null);
  // const [sharpenedImage, setSharpenedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [level, setLevel] = useState(5);
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["sharpen"],
    queryFn: () => {
      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        return makeRequest
          .post(`/sharpening?level=${level}`, formData)
          .then((res) => {
            setIsLoading(false);
            return `${res.data.sharpened_image_url}?t=${new Date().getTime()}`;
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
      queryClient.invalidateQueries({ queryKey: ["sharpen"] });
    },
  });

  const handleUploadFile = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      mutation.mutate(file);
    }
  };

  const handleChangeRange = (e) => {
    setLevel(e.target.value);
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
    <div className="sharpening">
      <div className="container">
        <h1>Sharpening</h1>
        <div className="content">
          <input type="file" id="uploadImage" onChange={handleUploadFile} />
          {!image ? (
            <div className="actions">
              <label htmlFor="uploadImage">Upload Image</label>
              <input
                className="inputRange"
                type="range"
                min={0}
                max={10}
                step={1}
                value={level}
                onChange={handleChangeRange}
              />
              <h2>{level}</h2>
            </div>
          ) : (
            <div className="result">
              <div className="items">
                <div className="item">
                  <span>Original</span>
                  <img src={image.preview} alt="originalImage" />
                </div>
                <div className="item">
                  <span>Sharpened Image</span>
                  {isLoading ? (
                    "Loading..."
                  ) : (
                    <img
                      src={"http://localhost:5000" + data}
                      alt="sharpenedImage"
                    />
                  )}
                </div>
              </div>
              <label htmlFor="uploadImage">Upload Image</label>
              <input
                className="inputRange"
                type="range"
                min={0}
                max={10}
                step={1}
                value={level}
                onChange={handleChangeRange}
              />
              <h2>{level}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sharpening;
