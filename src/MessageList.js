import React, { Component } from 'react';
import Message from "./Message";
import AddMessage from "./AddMessage";
import PropTypes from 'prop-types';


const MessageList = (props)=> {

        return(
            <ul className="message-list">
                {props.messages.map((message, index) => (
                    <Message key = {index} message={message} user={props.user}/>
                ))}
            </ul>

        )
    }

    MessageList.PropTypes = {
    messages: PropTypes.array,
        user: PropTypes.object
    }

export default MessageList;