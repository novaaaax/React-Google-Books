import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Books from "./components/Books";
import Search from "./components/Search"
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <div>
     <Navbar />
      <Switch>
      <Route path="/search" component={Search} exact></Route>
      <Route path="/saved" component={Books} exact></Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
