import React from "react";
import "./ResultPages.css"
import { Segment } from "semantic-ui-react";

export class ResultPages extends React.Component {
    state = {
        currentPage: 1,
        buttonName: "button",
        activeButton: ""
    }

    onClick = (e) => {
        this.setState({activeButton: e.target.name});
        this.props.onClick(parseInt(e.target.value));
    }

    renderResults = () => {
        return (
            this.props.results.map((result, index) => {
                const res = result + 1;
                const activeName = this.state.activeButton;
                const name = "button" + index;
                const className = name === activeName ? "activeButton" : "button";

                return (
                    <button
                        className={className}
                        name={name}   
                        value={res} key={result}
                        onClick={this.onClick}
                        style={{fontSize: "1.5em"}}>
                            {res}
                    </button>
                );
            })
        );
    }

    render = () => {
        return(
            <div className="ui container">
                <Segment>
                    { this.renderResults() }
                </Segment>
            </div>
        );
    }
}