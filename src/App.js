import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import AddProducts from './pages/AddProducts';
import Header from './components/Header';
import Footer from './components/Footer';

import AllProductsDB from './components/AllProductsDB';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import YourCartPage from './pages/YourCartPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/add-products">
            <AddProducts />
          </Route>
          <Route path="/produs-getAll">
            <AllProductsDB/>
          </Route>
          <Route path="/your-cart">
            <YourCartPage/>
          </Route>

          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
