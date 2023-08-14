import React, { useEffect, useState } from "react";
import "../styles/login.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import ForgaotPassword from "./ForgaotPassword";

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
    console.log(loginData);
  };
  const showPasswordtext = () => {
    // showPassword = !showPassword;
    setShowPassword(!showPassword);
    setShowPasswordIcon(!showPasswordIcon);
  };
  const handleLogin = async () => {
    if (!loginData.email || (!loginData.email && !loginData.password)) {
      setErrorEmail(true);
    }
    if (!loginData.password) {
      setErrorEmail(false);
      setErrorPass(true);
    }
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailFormat.test(loginData.email) === false) {
      setErrorEmail(true);
    }
    if (!(loginData.password.length > 5 && loginData.password.length < 16)) {
      setErrorPass(true);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/v1/login", {
        ...loginData,
      });
      console.log(response.data);
      const loginResponse = response.data;
      if (loginResponse.status === 400) {
        alert(loginResponse.error);
      } else {
        localStorage.setItem("token", loginResponse.token);
        localStorage.setItem("password", loginData.password);
        alert("login sucessfully!");
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h3>HandyNotes.com</h3>
                      <h4>Login</h4>
                    </div>

                    <form>
                      <p>Please create your account</p>

                      <MDBInput
                        className="mb-4"
                        type="email"
                        id="form1Example1"
                        label="Email address"
                        value={loginData.email}
                        name="email"
                        onChange={handleOnchange}
                      />
                      <MDBInput
                        className="mb-4"
                        type={showPassword ? "text" : "Password"}
                        id="form1Example3"
                        label="Password"
                        value={loginData.password}
                        name="password"
                        onChange={handleOnchange}
                      />
                      {showPasswordIcon ? (
                        <VisibilityIcon
                          className="mb-1"
                          onClick={showPasswordtext}
                        />
                      ) : (
                        <VisibilityOffIcon
                          className="mb-1"
                          onClick={showPasswordtext}
                        />
                      )}
                      {errorPass ? "Invalid password" : ""}

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={() => handleLogin()}
                        >
                          Log in
                        </button>
                        <a className="text-muted">
                          Forgot password?
                          <ForgaotPassword />
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => navigate("/signup")}
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
