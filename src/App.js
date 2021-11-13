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
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Register from './pages/Register/Register';
import Shop from './pages/Shop/Shop';
import ShopCart from './pages/ShopCart/ShopCart';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
          <PrivateRoute path="/cart/:id">
            <ShopCart />
          </PrivateRoute>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/shop">
            <Shop />
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
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
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
