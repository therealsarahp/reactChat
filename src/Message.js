import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Message = (props) =>{

        return(
            <li
                key={props.index}
                className={
                    props.message.username === props.user.username ? 'message sender' : 'message recipient'
                }
            >
                <p>{`${props.message.username}: ${props.message.text}`}</p>
            </li>
        )
}

Message.PropTypes = {
    user : PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
};


export default Message;