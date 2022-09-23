import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import About from './About'
import "./PageHolder.css";


const PageHolder = ({ sidebar }) => {
  return (
    <div className={`${sidebar ? "sidebar1" : "sidebar2"} myclsas`}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products"> 
          <Product />
        </Route>
        <Route exact path="/about" >
         <About />
        </Route>
      </Switch>
    </div>
  );
};

export default PageHolder;
