import { BrowserRouter, BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ItemDetails from './ItemDetails';
import Navbar from './Navbar';
import Cart from './Cart';
import Result from './Result';
import Favorites from './Favorites';
import History from './History';
import OrderDetails from './OrderDetails';
import React from 'react';

function App() {

  return (
    /*
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    */
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/AppleProducts">
              <Home />
            </Route>
            <Route path="/AppleProducts/items:id">
              <ItemDetails  />
            </Route>
            <Route path="/AppleProducts/cart">
              <Cart />
            </Route>
            <Route path="/AppleProducts/result">
              <Result />
            </Route>
            <Route path="/AppleProducts/favorites">
              <Favorites />
            </Route>
            <Route path="/AppleProducts/history">
              <History />
            </Route>
            <Route path="/AppleProducts/order-detail:id">
              <OrderDetails />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.StrictMode>

    //<Router>
      
    //</Router>
    
  );
}

export default App;
