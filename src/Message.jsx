import React, {Component} from 'react';

class Message extends Component {
  render() {
    const {type, content, username} = this.props.message;
    return (
      <div className="message">
        <span className="message-username">{username}</span>
        <span className="message-content">{content}</span>
      </div>
      );
    }
  }
 /* 
  <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div> */
export default Message;

