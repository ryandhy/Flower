import React, { Component } from 'react'
import "./all.css"
import axios from "axios"

export default class plant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    componentDidMount() {
        axios({
            url: "/api/sort_plant",
            method: "get"
        }).then((res) => {
            this.setState({
                arr: res.data.indexhot
            })
        });
    }
    render() {
        let newhtml = this.state.arr.map((item, index) => {
            return (
                <div className="sort-simple" key={index}>
                    <img src={item.img} alt="" />
                    <h3>{item.title}</h3>
                    <span>{item.text}</span><br />
                    <span>{item.price}</span>
                </div>
            )
        });
        return (
            <div className="sort-Simple">
                {newhtml}
            </div>
        )
    }
}
