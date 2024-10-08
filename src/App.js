// eslint-disable-next-line
import "./styles.css";
import React, { useEffect, useState } from 'react';
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/homepage/Navbar";
import Events from "./components/eventsPage/Events";
import ContactUs from "./components/contactUsPage/ContactUs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Starbg from "./components/homepage/Starbg";
import Team from './components/aboutUsPage/Team';
// import { Loader } from "@react-three/drei";
import "./components/Loader.scss";
import Loader from "./components/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <BrowserRouter>
            <Navbar />
            <Starbg />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}
