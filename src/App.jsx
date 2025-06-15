import { BrowserRouter, Route, Routes } from "react-router";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./components/RootLayout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
