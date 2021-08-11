import React, { Component } from 'react';
import MessageList from "./MessageList";
import AddMessage from "./AddMessage";
import PropTypes from 'prop-types';


class Chat extends Component {

    render() {

        return(


                <div className="chat-window">

                    <h2>Super Awesome Chat</h2>
                    <div className="name sender">{this.props.user.username}</div>

                    <MessageList user={this.props.user} messages={this.props.messages}/>
                    <AddMessage onAddMessage={this.props.onAddMessage} user={this.props.user}/>


                </div>

        )
    }

}

export default Chat;