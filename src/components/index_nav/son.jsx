import React, { Component } from 'react'
import "./son.css";
import "../../mock/index.js";
import axios from "axios";
import { withRouter } from "react-router-dom";

class son extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    componentWillMount() {
        axios({
            url: "/api/index_nav",
            method: "get"
        }).then((ok) => {
            // console.log(ok.data.indexnav);
            this.setState({
                arr: ok.data.indexnav
            });
        });
    }
    render() {
        let newhtml = this.state.arr.map((v,i) => {
            return (
                <div className="index-nav-son" key={i} onClick={() => {this.props.history.push("/sort")}}>
                    <img src={v.img} alt="" />
                    <p>{v.title}</p>
                </div>
            )
        });
        return (
            <div className="index-nav-Son">
                {newhtml}
            </div>
            
        )
    }
}
export default withRouter(son)