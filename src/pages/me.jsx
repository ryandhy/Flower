import React, { Component } from "react";
import "../styles/me.css";
import { Icon, Button } from "antd";

import OrderSon from "../components/order2/son.jsx";
import InfoSon from "../components/me_info/son.jsx";
import Menubar from "../components/menubar.jsx";

export default class me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bdisplay: "block",
      pdisplay: "none",
      user: ""
    }
  }
  componentDidMount() {
    let user = localStorage.getItem("data");
    // console.log(JSON.parse(user).name);
    if (user != null) {
      this.setState({
        bdisplay: "none",
        pdisplay: "block",
        user: JSON.parse(user).name
      });
    } else {
      this.setState({
        bdisplay: "block",
        pdisplay: "none"
      });
    }
  }
  logout = () => {
    localStorage.removeItem("data");
    this.setState({
      display: "block"
    }, () => {
      this.props.history.push("/index");
    });
  }
  render() {
    return (
      <div>
        <Menubar />
        <div className="me-h">
          <h2>个人中心</h2>
        </div>
        
        <div className="login">
          <p>欢迎来到花送</p>
            <span style={{display: this.state.bdisplay }} onClick={() => { this.props.history.push("/login") }}>
            <Button type="default">登录/注册</Button>
            </span>
          <p style={{ display: this.state.pdisplay }}>{this.state.user}<br /><span onClick={this.logout}>登出</span></p>
        </div>
        <div className="order">
          <div className="order1">
            <span>我的订单</span>
            <span>
              全部订单
              <Icon type="right" />
            </span>
          </div>
          <div className="order2">
            <OrderSon />
          </div>
        </div>
        <div className="info">
          <div className="_info">
            <InfoSon />
          </div>
        </div>
      </div>
    );
  }
}
