import {Form, Field} from 'simple-react-forms';
import React, {Component} from 'react';
import Select from 'react-select';
export default class AddBox1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: 'Sweden',weight:'0'};
        this.handleChange = this.handleChange.bind(this);
    }
    onClickHandler () {
        if(this.refs['simpleForm'].isValid()) {
            console.log(this.refs['simpleForm'].getFormValues());
        }
    }

    handleChange(event) {
        this.state.value="Sweden"
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Form submitted');
        event.preventDefault();
    }
    render () {
        const options = [
            { value: 'one', label: 'Sweden' },
            { value: 'two', label: 'China' },
            { value: 'three', label: 'Australia' },
            { value: 'four', label: 'Brazil' }
        ];
        return (
            <div>
                <Form ref='simpleForm' onSubmit={this.handleSubmit}>
                    <Field
                        name='name'
                        label='Box name'
                        type='text'
                        validators={['required']}
                    />
                    <Field
                        name='weight'
                        label='Box Weight'
                        type='text'
                        value={this.state.weight}
                        validators={['required']}
                    />
                    <Field
                        name='color'
                        label='Box Color'
                        type='text'
                        validators={['required']}
                    />

                    <Field
                        name='country'
                        label='Destination Country'
                        element={
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Sweden">Sweden</option>
                        <option value="Australia">Australia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="China">China</option>
                    </select>
                    }
                    />
                </Form>
                <button onClick={this.onClickHandler.bind(this)}>Submit</button>
            </div>

        );
    }
}