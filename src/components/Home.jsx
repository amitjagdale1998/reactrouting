import axios from "axios";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./styles/home.scss";
const Home = () => {
  const [pdfs, setPdfs] = useState([]);
  const token = localStorage.getItem("token");
  const fetchPdf = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/getAllpdf");
      setPdfs(res.data.pdf_url);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPdf();
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="col">
          <h1>Download Notes!</h1>
          <label>Categeory:</label>
          <ul>
            <li>Education</li>
            <li>Coding</li>
            <li>Bhakti</li>
          </ul>
        </div>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 228,
              height: 228,

              margin: 8,
              loading: "lazy",
            },
          }}
        >
          {pdfs.map((item) => {
            return (
              <>
                <div>
                  <iframe
                    loading="lazy"
                    src={item}
                    title="PDF Viewer"
                    style={{ width: "20rem", height: "15rem" }}
                    frameborder="0"
                    border="0"
                  >
                    <p>Your browser does not support PDF viewing.</p>
                  </iframe>
                  <button
                    className="view-button"
                    onClick={() => (window.location.href = `${item}`)}
                  >
                    view
                  </button>{" "}
                  <br></br>
                </div>
              </>
            );
          })}
        </Box>
      </div>
    </>
  );
};

export default Home;
