/**
 * Created by admin on 1/30/2017.
 */
/** @jsx React.createElement */
import React from "react";
import {Link} from "react-router";
export default class Layout extends React.Component{
    constructor(){
        super();
        this.msg="Layout-Boxinator!";
    }
    render(){

        return (
            <div>
                <div>
                <h1>{this.msg}</h1>
                    
                <Link to="/addbox" >AddBox</Link>&nbsp;&nbsp;
                <Link to="/listboxes"> ListBoxes</Link>
                </div>
                <div id="table">{this.props.children}</div>
                </div>
        );
    }
}