import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About/About';
import Contact from './pages/Contact/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Error/Error';
import FaqPage from './pages/FaqPage/FaqPage/FaqPage';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Pricing from './pages/Pricing/Pricing/Pricing';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <PrivateRoute exact path="/faq">
            <FaqPage />
          </PrivateRoute>
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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
