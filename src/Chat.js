import React, { Component } from 'react';
import MessageList from "./MessageList";


class Chat extends Component {

    isDisabled = () => {
        return false;
    };

    render() {
        return(
            <div className="container">

                <div className="chat-window">

                    <h2>Super Awesome Chat</h2>
                    <div className="name sender">{this.props.users[0].username}</div>

                    <MessageList user={this.props.users[0]} messages={this.props.messages}/>


                    <div>
                        <form className="input-group">
                            <input type="text" className="form-control" placeholder="Enter your message..." />
                            <div className="input-group-append">
                                <button className="btn submit-button" disabled={this.isDisabled()}>
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        )
    }

}

export default Chat;