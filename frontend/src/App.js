import { useEffect } from 'react';
import './App.css';
import { Header } from "./components/layout/Header/Header.jsx";
import { Footer } from "./components/layout/Footer/Footer.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import WebFont from "webfontloader";


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, []);

  return (
    <Router>
      <Header />
      <Footer />
    </ Router>
  );
}

export default App;
