import React, { Component } from 'react';
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import "../../mock/index.js";
import axios from "axios";
import "./son.css";

class son extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    componentWillMount() {
        axios({
            url: "/api/index_hot",
            method: "get"
        }).then((ok) => {
            // console.log(ok);
            this.setState({
                arr: ok.data.indexhot
            });
        });
    }
    render() {
        let newhtml = this.state.arr.map((v, i) => {
            return (
                <div className="index-hot-son" key={i}>
                    <img src={v.img} alt="" />
                    <div className="right">
                        <div className="top">
                            <h1>{v.title}</h1>
                            <p>{v.text}</p>
                        </div>
                        <div className="bottom">
                            <p>
                                <span>{v.price}</span><br />
                                <span>已销售<i>{v.num}</i>件</span>
                            </p>
                            <Button onClick={() => { this.props.history.push({ pathname: "/info", query: { img: v.img, title: v.title, price: v.price, num: v.num } }); }}>购买</Button>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                {newhtml}
            </div>
        )
    }
}

export default withRouter(son);