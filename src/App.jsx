import Images from "./components/Images";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/commonpages/Login";
import Logout from "./components/commonpages/Logout";
import Footer from "./components/Footer";
import Signup from "./components/commonpages/Signup";
import React, { useEffect, useState } from "react";
import Error from "./components/commonpages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protectedroutes from "./components/Protectedroutes";
import Upload from "./components/Upload";
const App = () => {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Update isLoggedIn state based on the presence of the token in local storage
  }, []);

  return (
    <BrowserRouter>
      <Protectedroutes>
        <Header />
      </Protectedroutes>
      <Routes>
        <Route path="/" exact element={<Login />} />

        <Route
          exact
          path="/home"
          element={
            <Protectedroutes>
              <Home />{" "}
            </Protectedroutes>
          }
        />

        <Route
          path="/images"
          element={
            <Protectedroutes>
              <Images />
            </Protectedroutes>
          }
        />

        <Route
          path="/upload"
          element={
            <Protectedroutes>
              <Upload />{" "}
            </Protectedroutes>
          }
        />

        <Route exact path="logout" element={<Logout />} />

        <Route path="*" element={<Error />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Protectedroutes>
        <Footer />
      </Protectedroutes>
    </BrowserRouter>
  );
};

export default App;
