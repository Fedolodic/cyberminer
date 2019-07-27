import React from 'react';
import "./SearchBar.css";
import { Form, Input} from 'semantic-ui-react';

export class SearchBar extends React.Component {
    state = {
        input:"",
        inputName:"Submit",
        labelName:"SearchBarLabel"
    }

    onChange = (e, {name, value}) => {
        this.setState({[name]:value});
    }

    onSubmit = () => {
        if(this.state.input.length) {
            this.setState({
                inputName:"Submitted",
            labelName:"SearchedBarLabel"});
            this.props.onSubmit(this.state.input);
        }
    }

    renderSearchBar = () => {
        return (
            <div className="Form">
                <div className="ui container">
                        <Form className={this.state.inputName} onSubmit={this.onSubmit}>
                            <Form.Field>
                                <label className={this.state.labelName}>CyberMiner</label>
                                <Input
                                    type="Input"
                                    name="input"
                                    placeholder="Search..."
                                    value={this.state.input}
                                    onChange={this.onChange}
                                    />            
                            </Form.Field>
                        </Form>
                </div>
            </div>
        );
    }

    render = () => {
        return (
        <div className="SearchBar">
            {this.renderSearchBar()}
        </div>);
    }
}