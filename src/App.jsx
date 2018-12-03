import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Kamylla'},
      messages: [],
      socket: {}
    }
    this.newMessage = this.newMessage.bind(this);
  }


  newMessage(event) {
    event.preventDefault();
    const username = event.target.elements['username'].value;
    if (username !== this.state.currentUser.name) {
      const message = {
        type: 'incomingNotification',
        content: `${this.state.currentUser.name} has changed their name to ${username}`
      }
      this.state.socket.send(JSON.stringify(message));
      this.setState({ currentUser: { name: username }});
    }
    const content = event.target.elements['message'].value;
    if (content.length > 0) {
      const message = {
        username,
        content,
        type: 'incomingMessage'
      };
      event.target.elements['message'].value = '';
      this.state.socket.send(JSON.stringify(message));
    }
  }


  componentDidMount() {
    var webSocket = new WebSocket("ws:/localhost:3001");
    webSocket.onmessage = ({ data }) => {
      console.log("Data cliente", data);
      const oldMessages = this.state.messages;
      const messages = [...oldMessages, JSON.parse(data) ];
      this.setState({ messages });
    };
    this.setState({ socket: webSocket });
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
