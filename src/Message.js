import React, { Component } from 'react';

class Message extends Component{
    render() {
        return(
            <li
                key={this.props.index}
                className={
                    this.props.message.username === this.props.user.username ? 'message sender' : 'message recipient'
                }
            >
                <p>{`${this.props.message.username}: ${this.props.message.text}`}</p>
            </li>
        )
    }

}

export default Message;