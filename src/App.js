import { BrowserRouter, BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ItemDetails from './ItemDetails';
import Navbar from './Navbar';
import Cart from './Cart';
import Result from './Result';
import Favorites from './Favorites';
import History from './History';
import OrderDetails from './OrderDetails';
import NotFound from './NotFound';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log("deployed");
  },[])

  return (
    <React.StrictMode>
      <BrowserRouter basename='/AppleProducts'>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/items:id">
              <ItemDetails  />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/order-detail:id">
              <OrderDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
