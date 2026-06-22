import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
