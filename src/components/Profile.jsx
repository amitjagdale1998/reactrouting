import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./styles/profile.scss";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import Swal from "sweetalert2";

export default function Profile() {
  const token = localStorage.getItem("token");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [showNPassword, setShowNPassword] = useState(false);
  const [edit, setEdit] = useState(true);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    oldPassword: "",
    password: "",
    cpassword: "",
  });

  const handleOnchange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSignupData({ ...signupData, [name]: value });
    console.log({ ...signupData, [name]: value });
  };
  const fetchProfileData = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/profile", {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const response = res.data;
    setSignupData({
      name: response.name,
      email: response.email,
      oldPassword: localStorage.getItem("password"),
    });
  };
  useEffect(() => {
    fetchProfileData();
  }, []);
  const showPasswordtext = () => {
    // showPassword = !showPassword;
    setShowPassword(!showPassword);
  };
  const showCPasswordtext = () => {
    // showPassword = !showPassword;
    setShowCPassword(!showCPassword);
  };
  const showNPasswordtext = () => {
    // showPassword = !showPassword;
    setShowNPassword(!showNPassword);
  };
  const updatePassword = async () => {
    if (!signupData.password || !signupData.cpassword) {
      return alert("hello");
    }
    const res = await axios.put(
      "http://localhost:5000/api/v1/profile",
      signupData,

      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      }
    );

    const response = res.data;
    console.log(response, "respponse");
    if (response.success === true) {
      Swal.fire({ title: `${response.message}` });
      setEdit(true);
      localStorage.clear("password");
      localStorage.setItem("password", signupData.password);
    } else {
      Swal.fire({ title: `${response.error}` });
      setEdit(true);
    }
  };
  const cancelUpdate = () => {
    setEdit(true);
    setSignupData({ signupData });
    setShowPassword(false);
    setShowNPassword(false);
    setShowCPassword(false);
  };
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <div className="row">
        <span>
          <h4> Profile:</h4>
          {edit ? (
            <span className="edit-icon">
              Edit
              <EditIcon
                style={{ color: "blueviolet", fontSize: "20px" }}
                onClick={() => setEdit(!edit)}
              />
            </span>
          ) : (
            " "
          )}
          ;
        </span>
      </div>
      <MDBInput
        className="mb-4"
        type="text"
        id="form1Example2"
        label="Name"
        value={signupData.name}
        name="name"
        onChange={handleOnchange}
      />
      <MDBInput
        className="mb-4"
        type="email"
        id="form1Example1"
        label="Email address"
        value={signupData.email}
        name="email"
        onChange={handleOnchange}
      />
      <MDBInput
        className="mb-4"
        type={showPassword ? "text" : "Password"}
        id="form1Example3"
        label="Password"
        value={signupData.oldPassword}
        name="oldpassword"
        onChange={handleOnchange}
      />
      <div>
        {showPassword ? (
          <VisibilityIcon className="visible-icon" onClick={showPasswordtext} />
        ) : (
          <VisibilityOffIcon
            className="visible-icon"
            onClick={showPasswordtext}
          />
        )}
      </div>

      {edit ? (
        " "
      ) : (
        <>
          <MDBInput
            className="mb-4"
            type={showNPassword ? "text" : "Password"}
            id="form1Example3"
            label="New Password"
            value={signupData.password}
            name="password"
            onChange={handleOnchange}
          />
          {showNPassword ? (
            <VisibilityIcon
              className="visible-icon"
              onClick={showNPasswordtext}
            />
          ) : (
            <VisibilityOffIcon
              className="visible-icon"
              onClick={showNPasswordtext}
            />
          )}

          <MDBInput
            className="mb-4"
            type={showCPassword ? "text" : "Password"}
            id="form1Example4"
            label="Confirm Password"
            value={signupData.cpassword}
            name="cpassword"
            onChange={handleOnchange}
          />
          {showCPassword ? (
            <VisibilityIcon
              className="visible-icon"
              onClick={showCPasswordtext}
            />
          ) : (
            <VisibilityOffIcon
              className="visible-icon"
              onClick={showCPasswordtext}
            />
          )}
        </>
      )}

      <MDBRow className="mb-4">
        <MDBCol className="d-flex justify-content-center">
          <MDBCheckbox id="form1Example3" label="Remember me" defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href="#!">Forgot password?</a>
        </MDBCol>
      </MDBRow>
      <div className="row profile-buttons">
        <MDBBtn onClick={() => updatePassword()} block>
          Update
        </MDBBtn>

        <MDBBtn type="cancel" onClick={() => cancelUpdate()} block>
          Cancel
        </MDBBtn>
      </div>
    </div>
  );
}
