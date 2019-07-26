import React from 'react';
import { Button } from "semantic-ui-react";

export class Toggle extends React.Component {
    state = {
        active:false
    };

    onClick = async () => {
        await this.setState(prevState => ({active: !prevState.active}));
        this.props.onClick(this.state.active);
    }

    render = () => {
        const {active} = this.state;

        return (
            <Button toggle active={active} onClick={this.onClick}>
                ToggleWWW
            </Button>
        );
    }
}