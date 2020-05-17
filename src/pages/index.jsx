import React, { Component } from "react";
import { Carousel, BackTop, Button, Icon } from "antd";
import Menubar from "../components/menubar.jsx";
import IndexNavSon from "../components/index_nav/son.jsx";
import IndexHotSon from "../components/index_hot/son.jsx";
import "../styles/index.css";

export default class index extends Component {
    render() {
        return (
            <div className="index-body">
                <Menubar />

                <div className="index-logo">
                    <img src="logo.jpg" alt="" onClick={() => { this.props.history.push("/index") }} />
                </div>
                <div className="index-banner">
                    <Carousel autoplay>
                        <div>
                            <img src="banner/banner1.jpg" alt="" />
                        </div>
                        <div>
                            <img src="banner/banner2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="banner/banner3.jpg" alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="index-nav">
                    <IndexNavSon />
                </div>
                <div className="index-tejia">
                    <img src="tejia.png" alt="" />
                </div>
                <div className="index-chose">
                    <p>- 快捷选择 -</p>
                    <div className="chose-img">
                        <img src="index_chose/hs11.png" alt="" />
                        <img src="index_chose/hs12.png" alt="" />
                        <img src="index_chose/hs13.png" alt="" />
                        <img src="index_chose/hs14.png" alt="" />
                    </div>
                </div>
                <div className="index-hot">
                    <div className="hot-title">
                        <span>人气推荐</span>
                        <span>更多 > </span>
                    </div>
                    <div>
                        <IndexHotSon />
                    </div>
                </div>
                <div className="index-gift">
                    <div className="gift-title">
                        <span>礼品推荐</span>
                        <span>更多 > </span>
                    </div>
                    <div className="image">
                        <img src="wlping.jpg" alt="" className="img" />
                        <div className="imgs">
                            <img src="index_gift1.jpg" alt="" />
                            <img src="index_gift2.jpg" alt="" />
                            <img src="index_gift3.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="index-link">
                    <Button size="small">登录注册</Button>
                    <Button size="small">订单查询</Button>
                    <Button size="small">常见问题</Button>
                    <Button size="small">关于我们</Button>
                </div>
                <div className="index-other">
                    <Icon type="phone" />
                    <Icon type="smile" />
                </div>

                {/* 回顶部 */}
                <div>
                    <BackTop />
                </div>
                {/* 联系客服 */}
                <div className="index-kefu">
                    <Icon type="message" />
                    <span>在<br />线<br />客<br />服</span>
                </div>
            </div>
        );
    }
}