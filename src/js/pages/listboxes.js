/** @jsx React.createElement */
import React from "react";
export default class ListBoxes extends React.Component {
    constructor() {
        super();
        this.msg = "View-B(ListBoxes)";
        this.state = { items: [] };
    }
    /*fetch(`http://localhost:8888/SpringMvc/listboxes`,{type:'POST',dataType:'json',success:json})
     .then(function json(response) {
     console.log(response);
     })*/
    componentDidMount() {

        $.ajax({
            url: "http://localhost:8888/SpringMvc/listboxes"
        }).then(function(data) {
            console.log(data);
            this.setState({items: data});
        }.bind(this))
    }

    render(){

                var tableStyle= {
                    borderStyle:'solid',
                    textAlign:'center',
                    borderColor:'grey',
                    margin:'20px',
                    paddingLeft:'0',
                    color:'black',
                    height:'80%',
                    width:'80%'
                }
                var td={
                    borderStyle:'solid',
                    borderColor:'grey',
                    textAlign:'center'
                }


        return (
                    <div>
                        <h1>{this.msg}</h1>
                            <div>
                                <table style={tableStyle}>
                                    <thead >
                                    <tr style={td}>
                                        <th style={td}>Name</th>
                                        <th style={td}>Weight</th>
                                        <th style={td}>Color</th>
                                        <th style={td}>Shipping Cost</th>
                                    </tr>
                                    </thead>
                                    <tbody >
                                    {this.state.items.map((data, key) => {
                                        return (
                                            <tr key={key} style={td}>
                                                <td style={td}>{data.name}</td>
                                                <td style={td}>{data.weight}</td>
                                                <td style={{backgroundColor:data.color}}>{data.color}</td>
                                                <td style={td}>{data.cost}</td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                    </div>
        )}
}
