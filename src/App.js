import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasketContextProvider from "./context/BasketContext";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import Basket from "./pages/Basket";

function App() {
  return (
    <BasketContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Catalog />
          </Route>
          <Route path="/basket">
            <Header />
            <Basket />
          </Route>
        </Switch>
      </Router>
    </BasketContextProvider>
  );
}

export default App;
