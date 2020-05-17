import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Index from "../pages/index.jsx";
import Sort from "../pages/sort.jsx";
import Cart from "../pages/cart.jsx";
import Me from "../pages/me.jsx";
import Login from "../pages/login.jsx";
import Info from "../pages/info.jsx";

export default class index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/index" component={Index} />
          <Route path="/sort" component={Sort} />
          <Route path="/cart" component={Cart} />
          <Route path="/me" component={Me} />
          <Route path="/login" component={Login} />
          <Route path="/info" component={Info} />
          <Redirect to="/index" />
        </BrowserRouter>
      </div>
    );
  }
}
