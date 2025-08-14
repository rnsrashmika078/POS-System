import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Receipt from "./components/Receipt/Receipt";
import Nav from "./pages/Nav";

export default function App() {
    return (
        <div className="font-custom text-[var(--foreground)]">
            <BrowserRouter>
      
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="payment" element={<Receipt />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
