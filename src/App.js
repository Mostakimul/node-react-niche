import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About/About/About';
import Contact from './pages/Contact/Contact/Contact';
import Error from './pages/Error/Error';
import FaqPage from './pages/FaqPage/FaqPage/FaqPage';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Pricing from './pages/Pricing/Pricing/Pricing';
import Register from './pages/Register/Register';
import DropDown from './pages/Shared/Navbar/DropDown';
import Navbar from './pages/Shared/Navbar/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  }, [isOpen]);

  return (
    <Router>
      <div className="bg-red-50">
        <Navbar isOpen={isOpen} toggle={toggle} />
        <DropDown isOpen={isOpen} toggle={toggle} />
      </div>
      <Switch>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/faq">
          <FaqPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
