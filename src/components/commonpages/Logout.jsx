import { Cookie } from "@mui/icons-material";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
function Logout(props) {
  const logoutSwwtAlert = () =>
    Swal.fire({
      html: `Are you sure to Exit?`,
      icon: "info",
      buttonsStyling: false,
      showCancelButton: true,
      confirmButtonText: "Ok, got it!",
      cancelButtonText: "Nope, cancel it",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear("token", "password");
        window.location.href = "/";
      } else if (result.isDismissed) {
        return;
      }
    });
  logoutSwwtAlert();
}
export default Logout;
