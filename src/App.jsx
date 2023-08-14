import Images from "./components/Images";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/commonpages/Login";
import Logout from "./components/commonpages/Logout";
import Footer from "./components/Footer";
import Signup from "./components/commonpages/Signup";
import React, { useEffect } from "react";
import Error from "./components/commonpages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protectedroutes from "./components/Protectedroutes";
import Upload from "./components/Upload";
import Profile from "./components/Profile";

const App = () => {
  const Token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Protectedroutes>
        <Header />
      </Protectedroutes>
      <Routes>
        {" "}
        {Token ? (
          <>
            <Route exact path="/signup" element={<Error />} />
          </>
        ) : (
          <>
            <Route exact path="/signup" element={<Signup />} />
          </>
        )}
        {Token ? (
          <>
            <Route
              exact
              path="/"
              element={
                <Protectedroutes>
                  <Home />{" "}
                </Protectedroutes>
              }
            />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Login />} />
          </>
        )}
        <Route
          exact
          path="/images"
          element={
            <Protectedroutes>
              <Images />
            </Protectedroutes>
          }
        />
        <Route
          exact
          path="/images/:categeory"
          element={
            <Protectedroutes>
              <Images />
            </Protectedroutes>
          }
        />
        <Route
          exact
          path="/upload"
          element={
            <Protectedroutes>
              <Upload />{" "}
            </Protectedroutes>
          }
        />
        <Route
          exact
          path="profile"
          element={
            <Protectedroutes>
              <Profile />
            </Protectedroutes>
          }
        ></Route>
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Protectedroutes>
        <Footer />
      </Protectedroutes>
    </BrowserRouter>
  );
};

export default App;
