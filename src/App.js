import React from "react";
import "./App.css";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopProvider from "./context/shopContext";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Navbar";
import Cart from "./components/Cart";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

const App = () => {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Router>
          <Header />
          <Cart />
          <Switch>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="*" component={NoMatch} />
          </Switch>
        </Router>
      </StyletronProvider>
    </ShopProvider>
  );
};

export default App;
