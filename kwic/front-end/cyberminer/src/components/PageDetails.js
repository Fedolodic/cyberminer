import React from "react";
import "./PageDetails.css"
import { Segment } from "semantic-ui-react";
import axios from "axios";

export class PageDetails extends React.Component {

    onClick = (e) => {
        console.log("e href: ", e.target.href);
        const link = JSON.stringify({link: e.target.href});

        axios.post("https://cyberminerkwic.herokuapp.com/db", link, 
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    renderPageDetail = () => {
        const url = this.props.url;
        const description = this.props.description;
        const link = this.props.link;

        return (
            <div className="ui container">
                <Segment>
                    <a href={link} value={link} onClick={this.onClick}>{url}</a>
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