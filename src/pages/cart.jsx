import React, { Component } from 'react'
// import Menubar from "../components/menubar.jsx";
import { Icon, Button, message } from "antd";
import "../styles/cart.css";
import ButtonGroup from 'antd/lib/button/button-group';

export default class cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empty: "block",
            notempty: "none",
            num: 0,
            jiantype: "delete",
            img: "",
            title: "",
            price: ""
        }
    }
    componentDidMount() {
        if (localStorage.getItem("data") != null) {
            this.setState({
                empty: "none",
                notempty: "block"
            });
            // console.log(this.props.location.state)
            if (this.props.location.state === undefined) {
                this.setState({
                    empty: "block",
                    notempty: "none"
                });
            } else {
                let num = this.props.location.state.num;
                if (num === 1) {
                    this.setState({
                        jiantype: "delete"
                    });
                } else if (num > 0) {
                    this.setState({
                        jiantype: "minus"
                    });
                }
                this.setState({
                    img: this.props.location.state.img,
                    title: this.props.location.state.title,
                    price: this.props.location.state.price,
                    num: this.props.location.state.num
                });
            }
        }
    }
    back = () => {
        this.props.history.push("/index");
    }
    add = () => {
        let num = this.state.num;
        if (num >= 0) {
            this.setState({
                jiantype: "minus"
            });
        }
        this.setState({
            num: num + 1
        });
    }
    jian = () => {
        let num = this.state.num;
        if (num === 2) {
            this.setState({
                jiantype: "delete"
            });
        }
        if (num > 1) {
            this.setState({
                num: num - 1
            });
        }
    }
    order = () => {
        if (localStorage.getItem("data") != null) {
            message.success("订单已生成!", 1.5, () => {
                this.props.history.push("/index");
            });
        } else {
            this.props.history.push("/me");
        }
    }
    render() {
        return (
            <div>
                <div className="cart-me">
                    <Icon type="left" onClick={this.back} />
                    <span>购物车</span>
                    <Icon type="unordered-list" />
                </div>
                <div className="empty" style={{ display: this.state.empty }}>
                    <img src="empty.png" alt="" /><br/>
                    <Button type="danger" shape="round" onClick={() => { this.props.history.push("/index") }}>去逛逛</Button>
                </div>
                <div className="not-empty" style={{ display: this.state.notempty }}>
                    <div className="not-empty-simple">
                        <img src={this.state.img} alt="" />
                        <div className="right">
                            <h1>{this.state.title}</h1>
                            <p>{this.state.price}</p>
                            <ButtonGroup>
                                <Button size="small" onClick={this.jian}><Icon type={this.state.jiantype} /></Button>
                                <Button size="small">{this.state.num}</Button>
                                <Button size="small" onClick={this.add}><Icon type="plus" /></Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div className="cart-buy">
                    <span className="left">合计：<i>￥{this.state.price.slice(1) * this.state.num}</i></span>
                    <Button type="danger" shape="round" onClick={this.order}>立即结算</Button>
                </div>

                {/* <Menubar /> */}
            </div>
        )
    }
}
