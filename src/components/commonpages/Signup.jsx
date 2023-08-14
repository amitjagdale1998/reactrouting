import React, { useState } from "react";
import "../styles/login.scss";
import { MDBInput } from "mdb-react-ui-kit";
const Signup = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignupData({ ...signupData, [name]: value });
    console.log(signupData);
  };
  return (
    <>
      <section
        className="h-50 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h3>HandyNotes.com</h3>
                        <h4 className="mt-1 mb-5 pb-1">Signup</h4>
                      </div>

                      <form>
                        <p>Please Signup to your account</p>
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
                          type="password"
                          id="form1Example3"
                          label="Password"
                          value={signupData.password}
                          name="password"
                          onChange={handleOnchange}
                        />
                        <MDBInput
                          className="mb-4"
                          type="password"
                          id="form1Example4"
                          label="Confirm Password"
                          value={signupData.cpassword}
                          name="cpassword"
                          onChange={handleOnchange}
                        />{" "}
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                          >
                            Signup
                          </button>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
