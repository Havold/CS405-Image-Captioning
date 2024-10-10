import { useEffect, useState } from "react";
import "./edgeDetectors.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const EdgeDetectors = () => {
  const [image, setImage] = useState(null);
  const [method, setMethod] = useState("sobel");
  const [isLoading, setIsLoading] = useState(false);
  const [lowThreshold, setLowThreshold] = useState(100);
  const [highThreshold, setHighThreshold] = useState(200);
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["edge"],
    queryFn: () => {
      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        return makeRequest
          .post(
            `/edge-detectors?method=${method}&low=${lowThreshold}&high=${highThreshold}`,
            formData
          )
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
      queryClient.invalidateQueries({ queryKey: ["edge"] });
    },
  });

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      mutation.mutate(file);
    }
  };

  const handleChangeMethod = (e) => {
    setMethod(e.target.value);
    mutation.mutate(image);
  };

  const handleChangeLowThreshold = (e) => {
    setLowThreshold(e.target.value);
    mutation.mutate(image);
  };

  const handleChangeHighThreshold = (e) => {
    setHighThreshold(e.target.value);
    console.log("Hello");
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
    <div className="edgeDetectors">
      <div className="container">
        <h1>Edge Detectors</h1>
        <div className="content">
          <input type="file" id="uploadImage" onChange={handleUploadFile} />
          {!image ? (
            <div className="upload">
              <label htmlFor="uploadImage">Upload Image</label>
              <select
                value={method}
                name="method"
                id="method"
                onChange={handleChangeMethod}
              >
                <option value="sobel">Sobel</option>
                <option value="prewitt">Prewitt</option>
                <option value="canny">Canny</option>
                <option value="compare">Both methods above</option>
              </select>
              {method !== "canny" ? (
                <></>
              ) : (
                <div className="ranges">
                  {" "}
                  <div className="range">
                    <h3>Low Threshold</h3>
                    <input
                      className="inputRange"
                      type="range"
                      min={0}
                      max={200}
                      step={10}
                      value={lowThreshold}
                      onChange={handleChangeLowThreshold}
                    />
                    <h3>{lowThreshold}</h3>
                  </div>
                  <div className="range">
                    <h3>High Threshold</h3>
                    <input
                      className="inputRange"
                      type="range"
                      min={0}
                      max={300}
                      step={10}
                      value={highThreshold}
                      onChange={handleChangeHighThreshold}
                    />
                    <h3>{highThreshold}</h3>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="result">
              <div className="items">
                <div className="item">
                  <span>Original</span>
                  <img src={image.preview} alt="originalImage" />
                </div>
                {error
                  ? "Something went wrong!"
                  : isLoading
                  ? "Loading..."
                  : Object.keys(data).map((imageName, index) => {
                      return (
                        <div className="item" key={index}>
                          <span>{imageName}</span>
                          <img
                            src={`http://localhost:5000${
                              data[imageName]
                            }?t=${new Date().getTime()}`}
                            alt="EdgeImage"
                          />
                        </div>
                      );
                    })}
              </div>
              <label htmlFor="uploadImage">Upload Image</label>
              <select
                value={method}
                name="method"
                id="method"
                onChange={handleChangeMethod}
              >
                <option value="sobel">Sobel</option>
                <option value="prewitt">Prewitt</option>
                <option value="canny">Canny</option>
                <option value="compare">Both methods above</option>
              </select>

              {method !== "canny" ? (
                <></>
              ) : (
                <div className="ranges">
                  {" "}
                  <div className="range">
                    <h3>Low Threshold</h3>
                    <input
                      className="inputRange"
                      type="range"
                      min={0}
                      max={200}
                      step={10}
                      value={lowThreshold}
                      onChange={handleChangeLowThreshold}
                    />
                    <h3>{lowThreshold}</h3>
                  </div>
                  <div className="range">
                    <h3>High Threshold</h3>
                    <input
                      className="inputRange"
                      type="range"
                      min={0}
                      max={300}
                      step={10}
                      value={highThreshold}
                      onChange={handleChangeHighThreshold}
                    />
                    <h3>{highThreshold}</h3>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EdgeDetectors;
