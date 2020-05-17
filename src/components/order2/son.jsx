import React, { Component } from 'react';
import { Icon } from "antd";
import "../../mock/index.js";
import axios from "axios";
import "./son.css";

export default class son extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    componentWillMount() {
        axios({
            url: "/api/me_order2",
            method:"get"
        }).then((ok) => {
            // console.log(ok.data.meorder2);
            this.setState({
                arr: ok.data.meorder2
            });
        });
    }
    render() {
        let newhtml = this.state.arr.map((v, i) => {
            return (
                <div className="me-son" key={i}>
                    <Icon type={v.img} theme="filled" />
                    <p>{v.title}</p>
                </div>
            )
        });
        return (
            // <div className="son">
            //     <Icon type="wallet" theme="filled" />
            //     <p>待付款</p>
            // </div>
            <div className="me-Son">
                {newhtml}
            </div>
        )
    }
}
