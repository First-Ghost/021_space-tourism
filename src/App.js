import { Crew } from "./components/Crew";
import { Destination } from "./components/Destination";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

import { Technology } from "./components/Technology";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destenation" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
