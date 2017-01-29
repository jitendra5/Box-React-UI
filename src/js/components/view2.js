/**
 * Created by admin on 1/29/2017.
 */
import React from "react";
export default class View2 extends React.Component{
    constructor(){
        super();
        this.msg="Its working! from view 2";

    }
    render(){
        return (
            <h1>{this.msg}</h1>
        );
    }
}