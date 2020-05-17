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
            url: "/api/me_info",
            method:"get"
        }).then((ok) => {
            // console.log(ok.data.meinfo);
            this.setState({
                arr: ok.data.meinfo
            });
        });
    }
    render() {
        let newhtml = this.state.arr.map((v,i) => {
            return (
                <div className="info-son" key={i}>
                    <div className="left">
                        <Icon type={v.img} />
                        <span>{v.title}</span>
                    </div>
                    <div className="right">
                        <Icon type="right" />
                    </div>
                </div>
            )
        });
        return (
            // <div className="info-son">
            //     <div className="left">
            //         <Icon type="shopping" />
            //         <span>我的兑换</span>
            //     </div>
            //     <div className="right">
            //         <Icon type="right" />
            //     </div>
            // </div>
            <div>
                { newhtml }
            </div>
        )
    }
}
