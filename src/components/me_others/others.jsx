import React, { Component } from "react";
import { Icon } from "antd";
import "./others.css";

export default class other extends Component{
    render() {
        return (
            <div className="each">
                <Icon type="qq-circle" theme="filled" />
                <span>QQ</span>
            </div>
        );
    }
}