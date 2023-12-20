import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Error from "./components/Error";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <Navbar />
            <Form />
            <Footer />
          </div>
        </Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </Router>
  );
}

export default App;
