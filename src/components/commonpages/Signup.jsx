import React, { useState } from "react";
import "../styles/login.scss";
const Signup = () => {
  const [signuData, setSignupData] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignupData({ ...signuData, [name]: value });
    console.log(signuData);
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

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                            value={signuData.email}
                            onChange={handleOnchange}
                            name="email"
                          />
                          <label className="form-label" for="form2Example11">
                            Email
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            name="password"
                            value={signuData.password}
                            onChange={handleOnchange}
                          />
                          <label className="form-label" for="form2Example22">
                            Password
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            name="cpassword"
                            value={signuData.cpassword}
                            onChange={handleOnchange}
                          />
                          <label className="form-label" for="form2Example22">
                            Confirm Password
                          </label>
                        </div>

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
