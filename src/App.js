import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./component/Home";
import Services from "./component/Services";
import Clients from "./component/Clients";
import Contact from "./component/Contact";
import About from "./component/About";
import BlogDetails from "./component/BlogDetails";
import NotFound from "./component/NotFoundPage";
import GtApexAssistant from "./component/GtApexAssistant";
import GtApexWhatsapp from "./component/GtApexWhatsapp";

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
          component={About}
        />

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