import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Services from "./component/Services";
import SD from "./component/SD"
import Clients from "./component/Clients";
import Contact from "./component/Contact";
import AboutUs from "./component/AboutUs";
import BlogDetails from "./component/BlogDetails";
import NotFound from "./component/NotFoundPage";
import GtApexAssistant from "./component/GtApexAssistant";
import RegisterForm from "./component/RegisterForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/Gt">
      <GtApexAssistant />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/services"
          component={Services}
        />
        <Route
          exact
          path="/services/:slug"
          component={SD}
        />
        <Route
          exact
          path="/blogs/:slug"
          component={BlogDetails}
        />
        <Route
          exact
          path="/clients"
          component={Clients}
        />
        <Route
          exact
          path="/contact"
          component={Contact}
        />
        <Route
          exact
          path="/about"
          component={AboutUs}
        />
        <Route exact path="/register" component = {RegisterForm} />
        <Route
          exact
          path="/not-found"
          component={NotFound}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;