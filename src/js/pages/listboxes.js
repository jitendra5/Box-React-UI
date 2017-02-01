/** @jsx React.createElement */
import React from "react";
import Fetch from "react-fetch";
export default class ListBoxes extends React.Component {
    constructor() {
        super();
        this.msg = "View-B(ListBoxes)";
        this.state = { items: [] };
    }
    getInitialState(){
        return {
            data: {
                items: []
            }
        };
    }
    componentDidMount() {
        fetch(`http://localhost:8888/SpringMvc/listboxes`)
            .then(data=> {
                this.setState({items:data.json()});
                console.log(this.state.items)
            })
    }
    render(){
        var pairs = [];
        for(var key in this.props.items){
            pairs.push(<p>{key} : {this.props.items[key]}</p>);
        }
        return (

                    <div>
                        <h1>{this.msg}</h1>
                            <div>
                                {pairs}
                            </div>

                    </div>
        )}
}
