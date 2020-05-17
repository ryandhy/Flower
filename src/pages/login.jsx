import React, { Component } from "react";
import "../styles/login.css";
import { Icon, Input, Button, message } from "antd"; //图标

import Other from "../components/me_others/others.jsx";

export default class me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      code: "",
      getCode: 0
    }
  }
  back = () => {
    this.props.history.go(-1);
  }
  username = (e) => {
    this.setState({
      username: e.target.value
    });
  }
  usernameBlur = () => {
    if (this.state.username === "") {
      message.warning("手机号不能为空！");
    } else if (!/^1[3456789]\d{9}$/.test(this.state.username)) {
      message.warning("请输入11位有效手机号！");
    }
  }
  code = (e) => {
    this.setState({
      code: e.target.value
    });
  }
  codeBlur = () => {
    if (this.state.code === "") {
      message.warning("验证码不能为空！");
    } else if (this.state.getCode !== Number(this.state.code)) {
      message.warning("请输入正确验证码！");
    }
  }
  getCode = () => {
    this.setState({
      getCode: Math.floor(Math.random() * (9999 - 1000)) + 1000
    }, () => {
      message.success("验证码为：" + this.state.getCode, 3);
    });
  }
  login = () => {
    if (this.state.username !== "" && this.state.code !== "" && Number(this.state.code) === this.state.getCode && /^1[3456789]\d{9}$/.test(this.state.username)) {
      message.success("成功");
      fetch("http://localhost:13000/enter", {
        method: "post",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: "username=" + this.state.username + "&code=" + this.state.code
      })
        .then(res => res.json())
        .then((ok) => {
          console.log(ok.data.data);
          if (ok.data.id === 1 || ok.data.id === 11) {
            localStorage.setItem("data", JSON.stringify(ok.data.data));
            this.props.history.push("/index");
          }
        });
    } else {
      message.success("请输入正确完整的手机号和验证码！");
    }
  }
  render() {
    return (
      <div>
        <div className="me">
          <Icon type="left" onClick={this.back} />
          <span>登录注册</span>
          <Icon type="unordered-list" />
        </div>
        <div className="title">登录/注册</div>
        <div className="input">
          <p>手机号</p>
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" onInput={this.username} onBlur={this.usernameBlur} />
          <p>验证码</p>
          <div className="Code">
            <div className="code">
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入验证码" onInput={this.code} onBlur={this.codeBlur} />
            </div>
            <Button onClick={this.getCode}>获取验证码</Button>
          </div>
        </div>
        <div className="login-reg">
          <Button type="primary" shape="round" size="large" block onClick={this.login}>手机登录/注册</Button>
        </div>
        <div className="other">
          其他方式登录
        </div>
        <div className="others">
          <Other />
          {/* <Other />
          <Other /> */}
        </div>
      </div>
    );
  }
}
