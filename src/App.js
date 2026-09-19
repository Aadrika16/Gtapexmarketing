import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Services from "./component/Services";
import SD from "./component/SD";
import Clients from "./component/Clients";
import Contact from "./component/Contact";
import AboutUs from "./component/AboutUs";
import Academy from "./component/Academy";
import BlogDetails from "./component/BlogDetails";
import NotFound from "./component/NotFoundPage";
import GtApexAssistant from "./component/GtApexAssistant";
import RegisterForm from "./component/RegisterForm";

// Updated import paths directly matching your other component structures
import EmployeeDirectory from "./component/EmployeeDirectory";
import EmployeeProfile from "./component/EmployeeProfile";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <GtApexAssistant />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/:slug" component={SD} />
        <Route exact path="/blogs/:slug" component={BlogDetails} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/academy" component={Academy} />
        
        {/* Employee Routes */}
        <Route exact path="/employees" component={EmployeeDirectory} />
        <Route exact path="/employees/:id" component={EmployeeProfile} />

        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/not-found" component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;