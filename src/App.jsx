import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IconsPage from "./pages/IconsPage";

import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchicons" element={<IconsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
