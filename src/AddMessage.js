import React, {Component} from "react";
import PropTypes from 'prop-types';

class AddMessage extends Component{
    state = {
        message: ''
    }

    handleChange= (event) => {
        event.preventDefault();
        this.setState({
            message : event.target.value
        })
    }

    addNewMessage = (event) => {
        event.preventDefault();
        this.props.onAddMessage(
            {username: this.props.user.username,
            text: this.state.message
            }
        )
    }

    isDisabled = () => {
        return false;
    };

    render(){

        return(
            <div>
                <form className="input-group"
                      onSubmit={this.addNewMessage}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your message..."
                        value = {this.state.message}
                        onChange = {this.handleChange}
                    />
                    <div className="input-group-append">
                        <button className="btn submit-button"
                                disabled={this.isDisabled()}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddMessage;