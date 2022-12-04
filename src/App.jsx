import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useToggle from "./hooks/useToggle";
import HomePage from "./pages/HomePage";
import SearchImages from "./pages/SearchImages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Details from "./pages/paletteDetails";
import { SavedPalettesProvider } from "./context/SavedPalettesContext";
import { ImagesContextProvider } from "./context/ImagesContext";
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
          <ImagesContextProvider>
            <BrowserRouter>
              <header>
                <Navbar handelClick={toggle} isOpen={toggleState} />
              </header>
              <Sidebar isOpen={toggleState} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/searchImages" element={<SearchImages />} />
                <Route path="/paletteDetails/:id" element={<Details />} />
              </Routes>
            </BrowserRouter>
          </ImagesContextProvider>
        </SavedPalettesProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
