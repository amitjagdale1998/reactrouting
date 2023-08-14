import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Input } from "@mui/material";
import { MDBSpinner } from "mdb-react-ui-kit";
import Swal from "sweetalert2";

export default function ForgaotPassword() {
  const [centredModal, setCentredModal] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const sendEmailPassword = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 3000);
    Swal.fire({
      text: "Email has been send successfully?",
      icon: "success",
      timer: 3000,
    });
  };
  const toggleShow = () => setCentredModal(!centredModal);

  return (
    <>
      <Link onClick={toggleShow}>Forgot password?</Link>

      <MDBModal tabIndex="1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Forgot Password?</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div>
                <div className="form-control">
                  <label className="col ml-2">Email:</label>
                  <Input className="col" type="text"></Input>
                  <br></br>

                  <MDBBtn
                    type="button"
                    className="col mt-2"
                    onClick={() => sendEmailPassword()}
                  >
                    {spinner ? (
                      <>
                        Send &nbsp;
                        <MDBSpinner className="me-2" size="sm">
                          <span className="visually-hidden">Loading...</span>
                        </MDBSpinner>
                      </>
                    ) : (
                      <>Send</>
                    )}
                  </MDBBtn>

                  <br></br>
                  <span className="col mt-2">
                    after sending mail check your email!
                  </span>
                </div>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
