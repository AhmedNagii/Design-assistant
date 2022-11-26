import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useToggle from "./hooks/useToggle";
import HomePage from "./pages/HomePage";
import IconsPage from "./pages/IconsPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { SavedPalettesProvider } from "./context/SavedPalettesContext";
import "./css/App.css";

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const [toggleState, toggle] = useToggle(false);

  return (
    <div className="App">
      <QueryClientProvider client={queryClinet}>
        <SavedPalettesProvider>
          <BrowserRouter>
            <Navbar handelClick={toggle} isOpen={toggleState} />
            <Sidebar isOpen={toggleState} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/searchicons" element={<IconsPage />} />
            </Routes>
          </BrowserRouter>
        </SavedPalettesProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
