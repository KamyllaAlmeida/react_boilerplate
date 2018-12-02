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
    this.newMessage = this.newMessage.bind(this);
  }


  newMessage(event) {
    event.preventDefault();
    const username = event.target.elements['username'].value || this.state.currentUser.name;
    const content = event.target.elements['message'].value;
    const message = {
      username,
      content,
      type: 'incomingMessage',
    };
    event.target.elements['message'].value = '';
    const messages = [...this.state.messages, message];
    this.setState({ messages })
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }
  
  render() {
    return (
      <div>
        <NavBar/>
        <MessageList  messages = {this.state.messages}/>
        <ChatBar currentUser ={this.state.currentUser} newMessage={ this.newMessage } />
      </div>
    );
  }
}
export default App;
