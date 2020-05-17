import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import "../styles/menubar.css";

export default class menubar extends Component {
  render() {
    return (
      <div className="nav">
            <Link to="/index">
                <Icon type="home" />
                <p>首页</p>
            </Link>
            <Link to="/sort">
                <Icon type="appstore" />
                <p>分类</p>
            </Link>
            <Link to="/cart">
                <Icon type="shopping-cart" />
                <p>购物车</p>
            </Link>
            <Link to="/me">
                <Icon type="user" />
                <p>我的</p>
            </Link>
        {/* <Link to="/login">login</Link> */}
      </div>
    );
  }
}
// export default withRouter(menubar);
