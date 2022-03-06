import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />

        <Route path="/add">
          <AddContact />
        </Route>

        <Route path="/edit/:id">
          <EditContact />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
