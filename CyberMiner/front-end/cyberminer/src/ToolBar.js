import React from "react";
import { DropDown } from "./DropDown";
import { Toggle } from "./Toggle";

export class ToolBar extends React.Component {
    onClick = active => {
        this.props.onClick(active);
    }

    renderDropDowns = () => {
        const dropDowns = this.props.dropDowns;
        
        return dropDowns.map(dropDown => {
            return (  <DropDown 
                placeHolder={dropDown.placeHolder}
                items = {dropDown.items}
                dropDownLabel = {dropDown.dropDownLabel}/>
            )
        });
    }

    sortChange = (sortOrder) => {
        this.props.sortChange(sortOrder);
    }

    resultsPerPageChange = (resultsPerPage) => {
        this.props.resultsPerPageChange(resultsPerPage);
    }

    render = () => {
        const sortBar = this.props.sortBar;
        const resultsPerPage = this.props.resultsPerPage;
        
        return (
            <div className="inverted ui menu">
                <Toggle onClick={this.onClick}/>
                <DropDown 
                    placeHolder={sortBar.placeHolder}
                    items = {sortBar.items}
                    dropDownLabel = {sortBar.dropDownLabel}
                    onChange={this.sortChange}/>
                <DropDown 
                    placeHolder={resultsPerPage.placeHolder.toString()}
                    items = {resultsPerPage.items}
                    dropDownLabel = {resultsPerPage.dropDownLabel}
                    onChange={this.resultsPerPageChange}
                    />
            </div>    
        );
    }
}