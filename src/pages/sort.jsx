import React, { Component } from 'react'
import Menubar from "../components/menubar.jsx";
import SortAll from "../components/sort_com/all.jsx"
import SortGift from "../components/sort_com/gift.jsx"
import SortPlant from "../components/sort_com/plant.jsx"
import "../styles/sort.css";
import { Tabs, BackTop } from 'antd';
const { TabPane } = Tabs;

export default class sort extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (

            <div>
                <Menubar />

                <div className="index-logo">
                    <img src="logo.jpg" alt="" onClick={() => { this.props.history.push("/index") }} />
                </div>

                <div className="sort-tab">
                    <Tabs tabPosition="top">
                        <TabPane tab="全部" key="1">
                            <SortAll />
                        </TabPane>
                        <TabPane tab="礼品" key="2">
                            <SortGift />
                        </TabPane>
                        <TabPane tab="绿植" key="3">
                            <SortPlant />
                        </TabPane>
                    </Tabs>
                </div>

                {/* 回顶部 */}
                <div>
                    <BackTop />
                </div>
            </div>
        )
    }
}
