import { useEffect, useState } from "react";
import { makeRequest } from "../../axios";
import "./imageCaptioning.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const ImageCaptioning = () => {
  const [image, setImage] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("model"));
  const [model, setModel] = useState(searchParams.get("model") || "clip-mt5");
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ["model"],
    queryFn: () => {
      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        return makeRequest.post(`/${model}`, formData).then((res) => {
          setIsLoading(false);
          console.log(res.data);
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
      queryClient.invalidateQueries({ queryKey: ["model"] });
    },
  });

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setImage(null);
      setIsLoading(true);
      mutation.mutate(file);
    }
  };

  const handleChangeType = (e) => {
    setModel(e.target.value);
    setIsLoading(true);
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
    <div className="imageCaptioning">
      <div className="container">
        <h1>Image Captioning</h1>
        <div className="content">
          <input type="file" id="uploadImage" onChange={handleUploadFile} />
          {!image ? (
            <div className="upload">
              <label htmlFor="uploadImage">Upload Image</label>
              <select
                value={model}
                name="model"
                id="model"
                onChange={handleChangeType}
              >
                <option value="clip-mt5">CLIP + mT5</option>
                <option value="clip-mbart">CLIP + mBART</option>
                <option value="clip-phogpt">CLIP + PhoGPT</option>
              </select>
            </div>
          ) : (
            <div className="result">
              <div className="items">
                <div className="item">
                  <span>Input Image</span>
                  {<img src={image.preview} alt="originalImage" />}
                </div>
                {error ? (
                  "Something went wrong!"
                ) : isLoading ? (
                  <div className="circle-loading"></div>
                ) : (
                  <>
                    <span className="caption">{data.caption}</span>
                  </>
                )}
              </div>
              <label htmlFor="uploadImage">Upload Image</label>
              <select
                value={model}
                name="model"
                id="model"
                onChange={handleChangeType}
              >
                <option value="clip-mt5">CLIP + mT5</option>
                <option value="clip-mbart">CLIP + mBART</option>
                <option value="clip-phogpt">CLIP + PhoGPT</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCaptioning;
