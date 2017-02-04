/** @jsx React.createElement */
import React from "react";
import Fetch from "react-fetch";
import reactCSS from 'reactcss';
export default class ListBoxes extends React.Component {
    constructor() {
        super();
        this.msg = "View-B(ListBoxes)";
        this.state = { items: [] };
    }

    componentDidMount() {
        /*fetch(`http://localhost:8888/SpringMvc/listboxes`,{type:'POST',dataType:'json',success:json})
            .then(function json(response) {
                console.log(response);
            })*/
        $.ajax({
            url: "http://localhost:8888/SpringMvc/listboxes"
        }).then(function(data) {
            console.log(data);
            this.setState({items: data});
        }.bind(this))
    }

    render(){

                var tableStyle= {
                    border:'2px',
                    margin:'20px',
                    paddingLeft:'0',
                    color:'black',
                    height:'80%',
                    width:'80%'

                }


        return (
                    <div>
                        <h1>{this.msg}</h1>
                            <div>
                                <table style={tableStyle}>
                                    <thead >
                                    <tr >
                                        <th >Receiver Name</th>
                                        <th >Weight</th>
                                        <th >Color</th>
                                        <th >Shipping Cost</th>
                                    </tr>
                                    </thead>
                                    <tbody >
                                    {this.state.items.map((data, key) => {
                                        return (
                                            <tr key={key} >
                                                <td >{data.name}</td>
                                                <td >{data.weight}</td>
                                                /*change backgroundcolor of each cell*/
                                                <td style={{backgroundColor: 'blue'}}>{data.color}</td>
                                                <td >{data.cost}</td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                    </div>
        )}
}
