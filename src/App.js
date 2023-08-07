import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Useparams from "./components/Useparams";
import SearchParams from "./components/SearchParams";
import Navigate from "./components/Navigate";
import NestedRouting from "./components/NestedRouting";
import Nested1 from "./components/nestedpages/Nested1";
import Nested2 from "./components/nestedpages/Nested2";
import Nested3 from "./components/nestedpages/Nested3";
import UseLocation from "./components/UseLocation";
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="params" element={<Useparams />}></Route>
          <Route path="/params/:name" element={<Useparams />}></Route>
          <Route path="/searchparams" element={<SearchParams />}></Route>
          <Route path="/navigator" element={<Navigate />}></Route>
          <Route path="/uselocation" element={<UseLocation />}></Route>
          <Route path="/nestedroute/" element={<NestedRouting />}>
            <Route path="nested1" element={<Nested1 />}></Route>
            <Route path="nested2" element={<Nested2 />}></Route>
            <Route path="nested3" element={<Nested3 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
