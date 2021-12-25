import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import View from "./components/view/view";

function App() {
  return (
    <>
      <Router>
        <Route key={"header"} path="/" component={Header} />
        <Route key={"homePage"} exact path="/" component={Home} />
        <Route key={"viewPage"} exact path="/view" component={View} />
        <Route key={"footer"} path="/" component={Footer} />
      </Router>
    </>
  );
}

export default App;
