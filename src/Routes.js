import { BrowserRouter, Switch, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import  Product  from "./pages/Product";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
