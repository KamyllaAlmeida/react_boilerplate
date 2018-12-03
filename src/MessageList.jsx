import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const messageList = this.props.messages.map((message) => {
      console.log(message);
      return <Message message={message}/>;
    });
    return (
      <main className="messages">
        {messageList}
      </main>
      );
    }
  }
 
export default MessageList;