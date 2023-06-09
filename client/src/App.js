import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

// Import Styling
import "./App.css";

// Import Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";



const App = () => (
  <Provider store={ store }>
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  </Provider>
);

export default App;
