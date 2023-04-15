import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Certificate from "./Components/Certificate";
import Client from "./Components/Client";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/products' exact component={Products}/>
          <Route path='/certificates' exact component={Certificate}/>
          <Route path='/clients' exact component={Client}/>
          <Route path='/contact' exact component={Contact}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
