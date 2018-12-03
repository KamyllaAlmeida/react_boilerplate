import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    const clientsConnected = this.props.clientsConnected;
    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <p className = 'navbar-connections'> { clientsConnected === 1 ? '1 user' : `${clientsConnected} users` } online</p>
    </nav>
    );
  }
}

export default NavBar;
