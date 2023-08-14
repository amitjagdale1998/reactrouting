import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Swal from "sweetalert2";
const Images = () => {
  const [allimages, setAllimages] = useState([]);
  const token = localStorage.getItem("token");
  async function getImages() {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/getAllimage", {
        headers: {
          "auth-token": token,
          "Content-type": "application/json",
        },
      });

      const data = res.data;
      setAllimages(data.image_url);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getImages();
  }, []);
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const handleDownload = ({ item }) => {
    const link = document.createElement("a");
    link.href = `${item}`; //image url
    link.download = `${item}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const handleOnchange = (e) => {
    const value = e.target.files[0];

    setImage(value);
    console.log(value);
    // const name1 = value.name;
    // setImageName(name1);
  };

  console.log(imageName);

  const uploadImage = async () => {
    if (!image) {
      Swal.fire({
        text: "select Image please!",
        icon: "info",
      });
    }
    try {
      const formData = new FormData();
      formData.append("image", image);
      const res = await axios.post(
        "http://localhost:5000/api/v1/uploadimage",
        formData,
        {
          headers: {
            "auth-token": token,
            "Content-type": "multipart/form-data",
          },
        }
      );
      const response = res.status;
      const resData = res.data;
      if (res.status === 200 && resData.success) {
        Swal.fire({ text: `${resData.message}`, icon: "success" });
      } else if (res.status === 400) {
        Swal.fire({
          text: "something Went to wrong!",
          icon: "error",
        });
      }
      console.log(resData);
    } catch (error) {
      console.log(error);
    } finally {
      setImage("");
      setImageName(" ");
    }
  };
  return (
    <div>
      <div>
        <div
          className="input-group mt-3"
          style={{ width: "50%", margin: "auto", border: "1px solid black" }}
        >
          <div className="form-outline">
            <input type="search" id="form1" className="form-control" />

            <label className="form-label" for="form1">
              Search
            </label>
          </div>{" "}
          <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>{" "}
        <div>
          <input
            type="file"
            // style={{ position: "fixed" }}
            name="image"
            onChange={handleOnchange}
          ></input>{" "}
          <CloudUploadIcon
            fontSize="large"
            onClick={() => uploadImage()}
            style={{
              color: "blueviolet",
              //   position: "static",
              marginLeft: "2rem",
            }}
          ></CloudUploadIcon>
          <span>{imageName}</span>
        </div>
      </div>
      <ImageList
        variant="quilted"
        className="mt-3"
        xs={12}
        sm={6}
        md={12}
        lg={3}
        xl={2}
        rowHeight={221}
        style={{
          height: "100vh",
          width: "100%",
          padding: "10px",
          margin: "10px",
        }}
      >
        {allimages.map((item) => (
          <>
            <ImageListItem
              key={item}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item, 121, item.rows, item.cols)}
                alt={item}
                loading="lazy"
                style={{
                  padding: "10px",
                  borderRadius: "20px",
                  position: "absolute",
                }}
              />
              <FullscreenIcon
                onClick={() => handleDownload({ item })}
                style={{ position: "relative" }}
                fontSize="large"
              >
                view
              </FullscreenIcon>
            </ImageListItem>
          </>
        ))}
      </ImageList>
    </div>
  );
};

export default Images;
