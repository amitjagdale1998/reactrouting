import React, { useState } from "react";
import "./styles/upload.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { MDBBtn } from "mdb-react-ui-kit";

const Upload = () => {
  const categories = [
    "Education",
    "Spiritual",
    "Novel",
    "Shayari",
    "AutoBiography",
    "Biography",
  ];

  const [pdfData, setPdfData] = useState("");
  const [pdfInfo, setPdfInfo] = useState({
    title: "",
    categeory: "",
  });

  const token = localStorage.getItem("token");
  const uploadPfInfo = async () => {
    if (!pdfInfo.title || !pdfInfo.categeory || !pdfData) {
      alert("All Field Mandatory!");
      return;
    }
    try {
      const respdfinfo = await axios.post(
        "http://localhost:5000/api/v1/saveNotes",
        pdfInfo,
        {
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(respdfinfo.data);
      const res = respdfinfo.data;
      if (res.success) {
        setPdfInfo({ title: "", categeory: "" });
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadPdf = async () => {
    await uploadPfInfo();
    if (!pdfInfo.title || !pdfInfo.categeory || !pdfData) {
      return;
    }
    if (!pdfData) {
      return;
    }

    const fileName = pdfData.name;
    console.log(pdfData.name);
    var ext = fileName.substring(fileName.lastIndexOf(".") + 1);

    if (ext.toLowerCase() !== "pdf") {
      alert("Invalid file format! Only PDF files are allowed.");

      return;
    }

    const formData = new FormData();
    formData.append("file", pdfData);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/uploadPdf",
        formData,
        {
          headers: {
            "auth-token": token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      const responseData = res.data;
      if (responseData.success) {
        setPdfData(""); // Clear the selected file after successful upload
        // Clear the form fields after successful upload

        Swal.fire({ text: "File Upload SuccessFully", icon: "success" });
        const fileInput = document.getElementsByClassName("fileInput");
        if (fileInput) {
          fileInput.value = "";
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePdfInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPdfInfo({ ...pdfInfo, [name]: value });
  };

  const handlePdfOnChange = (e) => {
    const pdf = e.target.files[0];
    setPdfData(pdf);
  };

  return (
    <div className="container mt-3 col-6 upload-page">
      <div className="row">
        <h1>Upload Here!</h1>
        <input
          type="text"
          className="mt-3"
          placeholder="Title"
          value={pdfInfo.title}
          name="title"
          onChange={handlePdfInfo}
        />
        <br />
        <select
          className="mt-3"
          value={pdfInfo.categeory}
          onChange={handlePdfInfo}
          name="categeory"
        >
          <option value="">Select</option>
          {categories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <br />
        <input
          type="file"
          className="mt-3 fileInput"
          onChange={handlePdfOnChange}
        />
        <div className="row gy-3 gx-9">
          <div className="upload-buttons">
            <MDBBtn className="submit-button" onClick={() => uploadPdf()}>
              Submit
            </MDBBtn>

            <MDBBtn className="cancel-button" type="reset">
              Cancel
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
