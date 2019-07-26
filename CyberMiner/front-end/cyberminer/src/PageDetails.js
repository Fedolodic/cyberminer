import React from "react";
import "./PageDetails.css"
import { Segment } from "semantic-ui-react";

export class PageDetails extends React.Component {

    renderPageDetail = () => {
        const url = this.props.url;
        const description = this.props.description;
        const link = this.props.link;

        return (
            <div className="ui container">
                <Segment>
                    <a href={link}>{url}</a>
                    <br/>
                    <br/>        
                    <p>{description}</p> 
                </Segment>
            </div>
        );
    }

    render = () => {
        return this.renderPageDetail();
    }
}