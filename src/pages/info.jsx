import React, { Component } from 'react';
import { Carousel, Icon, Button } from "antd";
import { withRouter } from "react-router-dom";
import ButtonGroup from 'antd/lib/button/button-group';
import "../styles/info.css";

class info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
            jiantype: "minus",
            img: "",
            title: "",
            price: "",
            cell: 1
        }
    }
    componentDidMount() {
        this.setState({
            img: this.props.location.query.img,
            title: this.props.location.query.title,
            price: this.props.location.query.price,
            cell: this.props.location.query.num
        });
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
    buy = () => {
        if (localStorage.getItem("data") != null) {
            this.props.history.push({ pathname: "/cart", state: { img: this.state.img, title: this.state.title, price: this.state.price, num: this.state.num } })
        } else {
            this.props.history.push("/me");
        }
    }
    render() {
        return (
            <div className="info-body">
                <div className="carousel">
                    <Carousel autoplay>
                        <div>
                            <img src={this.state.img} alt="" />
                        </div>
                        <div>
                            <img src={this.state.img} alt="" />
                        </div>
                    </Carousel>
                    <Icon type="left" onClick={() => { this.props.history.go(-1) }} />
                    <Icon type="ellipsis" />
                </div>
                <div className="main">
                    <div className="main1">
                        <h1>{this.state.title}</h1>
                        <p>
                            <span>{this.state.price}</span>
                            <span>已售出<i>{this.state.cell}</i>件</span>
                        </p>
                    </div>
                    <div className="main2">
                        <p>适合用途：爱情|生日</p>
                        <p>适合对象：恋人</p>
                        <p>数量：
                            <ButtonGroup>
                                <Button size="small" onClick={this.jian} ><Icon type={this.state.jiantype} /></Button>
                                <Button size="small">{this.state.num}</Button>
                                <Button size="small" onClick={this.add} ><Icon type="plus" /></Button>
                            </ButtonGroup>
                        </p>
                    </div>
                    <div className="main3">
                        <span>配送：</span><span>全国</span>
                        <p>22:00前下单，1-2小时可送达; 22:00后下单，预计明日送达。若咨询客户，22:00后下单，1-2小时可送达。</p>
                    </div>
                    <div className="main4">
                        <p><span>材料：</span>11枝优质红玫瑰措配绿叶，满天星.随机赠送2只小熊</p>
                        <p><span>花语：</span>唇齿相依，不离不弃，携手一生，永不分离!</p>
                        <p><span>包装：</span>色报纸圆形包装.色网纱束腰，搭配精美蝴蝶结。</p>
                        <p><span>附送：</span>免费附送精美贺卡，代写您的祝福。(您下单时可填写留言栏)</p>
                        <p><span>配送：</span>本地区各市县、乡镇、街道(市区内免费配送)</p>
                        <p><span>说明：</span>由于鲜花包扎各地的花艺师不同，可能在花束的形式和搭配上与图片不完全一致，但我们保证鲜花的主花材品种、新鲜程度、数量、颜色与说明一致，谢谢。</p>
                    </div>
                    <div className="main5">
                        <div>
                            <Icon type="check-circle" theme="filled" />
                            <span>优质鲜花花材</span>
                        </div>
                        <div>
                            <Icon type="check-circle" theme="filled" />
                            <span>12年知名品牌</span>
                        </div>
                        <div>
                            <Icon type="check-circle" theme="filled" />
                            <span>高效鲜花速递</span>
                        </div>
                        <div>
                            <Icon type="check-circle" theme="filled" />
                            <span>无忧售后</span>
                        </div>
                    </div>

                    <div className="main6">
                        <div className="_main6">
                            <Icon type="smile" /><br />
                            <span>客服</span>
                        </div>
                        <div className="_main6">
                            <Icon type="phone" /><br />
                            <span>电话订购</span>
                        </div>
                        <Button type="danger" shape="round" size="large" onClick={() => { this.props.history.push({ pathname: "/cart", state: { img: this.state.img, title: this.state.title, price: this.state.price, num: this.state.num } }) }}>加入购物车</Button>
                        <Button type="danger" shape="round" size="large" onClick={this.buy}>立即购买</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(info);