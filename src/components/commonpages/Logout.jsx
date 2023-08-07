function Logout() {
  localStorage.clear("token");

  window.location.reload();
  window.location = "/";
}
export default Logout;
