import {Form, Field} from 'simple-react-forms';
import React, {Component} from 'react';
import SketchPicker from 'react-color';
import reactCSS from 'reactcss';
export default class AddBox1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'Sweden',
            weight:'0',
            inputColor:'',
            displayColorPicker: false,
            color: {
                r: '241',
                g: '112',
                b: '0',
                a: '1'
            }
        };
        this.selectChange = this.selectChange.bind(this);
    }
    onClickHandler () {
        if(this.refs['simpleForm'].isValid()) {
            event.preventDefault();
            console.log(this.refs['simpleForm'].getFormValues());
            $.ajax({
                type:"POST",
                url:'http://localhost:8888/SpringMvc/addbox',
                contentType:"application/json",
                dataType:"json",
                data:JSON.stringify(this.refs['simpleForm'].getFormValues()),
                success:function(response) {
                    alert(JSON.stringify(response));
                    alert("Form is submitted");
                },
                sendBefore: function () {
                    alert("url sending");
                },
                error: function (error) {
                    alert(JSON.stringify(error));
                }
                //data:JSON.stringify(this.refs['simpleForm'].getFormValues())
            });
            /*fetch('http://localhost:8888/SpringMvc/addbox', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.refs['simpleForm'].getFormValues())
            })
                .catch((error) => {
                    console.error(error);
                });*/
        }

    }

    selectChange(event) {
        this.state.value="Sweden";
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Form submitted sucessfully');
        event.preventDefault();
            $.ajax({
                type:"POST",
                url:'http://localhost:8888/SpringMvc/addbox',
                data:this.refs['simpleForm'].getFormValues(),
                success:function(response) {
                    alert("success");
                }
            });

    }

    colorChange(event){
        //this.setState({inputColor:event.target.value});
    }
    handleClick = (event) => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker });

    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb });
        this.setState({inputColor:color.hex});

    };


    render () {
        const options = [
            { value: 'one', label: 'Sweden' },
            { value: 'two', label: 'China' },
            { value: 'three', label: 'Australia' },
            { value: 'four', label: 'Brazil' }
        ];
        const styles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer'
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2'
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px'
                },
                formTag :{
                    position: "relative",
                    width: "50%",
                    height:'10%',
                    padding: "5px"
                },
                inputTag:{
                    position: "relative",
                    width: "47%",
                    height:'15%',
                    padding: "5px",
                    margin: "12px",
                    borderRadius:'3px',
                    borderWidth: '0.5px'
                }

            }
        });
        return (
            <div style={{ width:'80%',backgroundColor: 'powderblue', align:'center'}}>
                <Form ref='simpleForm' onSubmit={this.handleSubmit.bind(this)}>

                    <Field
                        name='name'
                        style={ styles.formTag }
                        label='Box name'
                        type='text'
                        validators={['required']}
                    />
                    <Field
                        name='weight'
                        label='Box Weight'
                        style={ styles.formTag }
                        type='text'
                        value={this.state.weight}
                        validators={['required',(value) => {
              if ((value)==0) {
               return {valid: false, error: 'Weight cant be 0'}
              }
              else {
              return {valid: true}

              }
            }]}
                    />
                    <Field
                        name='color'
                        label='Box Color'
                        value ={ this.state.inputColor}
                        validators={['required', (value) => {
              if (this.state.color.b!=0) {
               return {valid: false, error: 'You cannot select Blue color.Make blue value=0 in color picker using ^ symbol'}
              }
              else {
              return {valid: true}

              }
            }]}
                        value ={ this.state.inputColor}
                        element={
                        <div >
                        <input style={ styles.inputTag } id="colorPicker" placeholder="click to show color picker" value ={ this.state.inputColor} onClick={ this.handleClick } onBlur={this.colorChange}/>
                        { this.state.displayColorPicker ? <div style={ styles.popover }>
                            <div style={ styles.cover } onClick={ this.handleClose }/>
                            <SketchPicker color={ this.state.color } onChange={ this.handleChange } disableAlpha='false' />
                        </div> : null }
                    </div>
                        }

                        />
                    <Field
                        name='country'
                        label='Destination Country'
                        validators={['required']}
                        element={
                    <select value={this.state.value} onChange={this.selectChange}>
                        <option value="Sweden">Sweden</option>
                        <option value="Australia">Australia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="China">China</option>
                    </select>
                    }
                    />
                </Form>
                <button class="btn btn-success" style={{ margin:'30px',width:'100px', height:'30px'}} onClick={this.onClickHandler.bind(this)}>Submit</button>
            </div>
        );
    }
}