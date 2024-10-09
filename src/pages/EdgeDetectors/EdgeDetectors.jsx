import { useEffect, useState } from "react";
import "./edgeDetectors.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const EdgeDetectors = () => {
  const [image, setImage] = useState(null);
  const [method, setMethod] = useState("sobel");
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["edge"],
    queryFn: () => {
      const formData = new FormData()
      formData.append('image', image)
      return makeRequest.post("/edge-detectors?method="+ method, formData).then((res) => {
        setIsLoading(false);
        return res.data;
      });
    },
  });
  console.log(method)

  const mutation = useMutation({
    mutationFn: (newImage) => {
      newImage.preview = URL.createObjectURL(newImage)
      setImage(newImage)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['edge']})
    }
  })

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true)
      mutation.mutate(file)
    }
  };

  const handleChangeMethod = (e) => {
    setMethod(e.target.value)
    mutation.mutate(image);
  }
  

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
              </select>
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
                      return <div className="item" key={index}>
                        <span>{imageName}</span>
                        <img src={`http://localhost:5000` + data[imageName]} alt="EdgeImage" />
                      </div>;
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
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EdgeDetectors;
