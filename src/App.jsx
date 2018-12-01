import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


const  messages= [
  {
    username: "Bob",
    content: "Has anyone seen my marbles?",
    id: 1,
    type: " "

  },
  {
    username: "Anonymous",
    content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
    id: 2,
    type: " "
  }
];

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: {name: 'Kamylla'},
      messages: messages
    }
  }
  render() {
    return (
      <div>
        <NavBar/>
        <MessageList  messages = {this.state.messages}/>
        <ChatBar currentUser ={this.state.currentUser}/>
      </div>
    );
  }
}
export default App;
