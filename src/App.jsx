import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IconsPage from "./pages/IconsPage";

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
  return (
    <QueryClientProvider client={queryClinet}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/searchicons" element={<IconsPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
