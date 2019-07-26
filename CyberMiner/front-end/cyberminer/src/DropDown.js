import React from "react";
import { Dropdown, Label } from "semantic-ui-react";

export class DropDown extends React.Component {
    onChange = (e, dropDown) => {
        this.props.onChange(dropDown.value);
    }

    renderDropDown = () => {
        const items = this.props.items;
        
        const itemOptions = items.map(item => {
            return(
                {
                    key: item,
                    text: item.toString(),
                    value: item
                }
            );
        })

        return (
            <div className="drop">
                <Label size='large'>
                    {this.props.dropDownLabel}
                </Label>
                <Dropdown
                    placeholder={this.props.placeHolder}
                    selection
                    options={itemOptions}
                    onChange={this.onChange}/>
            </div>
        );
    }

    render = () => {
        return (
            this.renderDropDown()
        );
    }
}