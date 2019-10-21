import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:posts__id" component={Post} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
