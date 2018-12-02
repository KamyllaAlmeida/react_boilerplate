import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    const {name} = this.props.currentUser;
    return (
      <form onSubmit={this.props.newMessage}>
        <footer className="chatbar">
          <input className="chatbar-username" name="username" placeholder="Your Name (Optional)" defaultValue={name} />
          <input className="chatbar-message" name="message" placeholder="Type a message and hit ENTER" />
          <button className="hidden" type="submit"></button>
        </footer>
      </form>
    );
  }
}

export default ChatBar;