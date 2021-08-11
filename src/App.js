import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat';
import AddMessage from "./AddMessage";
// import MessageList from "./MessageList";
// import Message from "./Message";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

// const messages = [
//   { username: 'Amy', text: 'Hi, Jon!' },
//   { username: 'Amy', text: 'How are you?' },
//   { username: 'John', text: 'Hi, Amy! Good, you?' },
// ];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
    state = {
        messages: [
            { username: 'Amy', text: 'Hi, Jon!' },
            { username: 'Amy', text: 'How are you?' },
            { username: 'John', text: 'Hi, Amy! Good, you?' },
        ]
    }

    handleAddMessage = (message) =>{
        this.setState((prevState) => ({
            messages: [...prevState.messages, message]
        }))
    }


    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
            {users.map((user)=>
                <Chat user={user} messages={this.state.messages}
                onAddMessage = {this.handleAddMessage}/>
                )
            }
        </div>
      </div>
    );
  }
}

export default App;
