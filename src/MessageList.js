import React, { Component } from 'react';
import Message from "./Message";

class MessageList extends Component {
    render() {
        return(
            <ul className="message-list">
                {this.props.messages.map((message, index) => (
                    <Message key = {index} message={message} user={this.props.user}/>
                ))}
            </ul>

        )
    }

}

export default MessageList;