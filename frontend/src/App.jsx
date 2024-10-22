import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Display from "./pages/Display";
import Insert from "./pages/Insert";
import EditBook from "./pages/EditBook";
import Search from "./pages/Search";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Add more routes here */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/display" element={<Display />} />
          <Route path="/search" element={<Search />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
