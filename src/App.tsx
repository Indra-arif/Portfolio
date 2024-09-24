import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example1 from "./pages/halaman-1";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Example1 />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
