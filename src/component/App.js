import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Message from './Message';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Chirper</h1>
        </header>

        <ul className="list-group">
          <Message text="more and more text" />
          <Message text="a little more text than before" />
          <Message text='werasdfqef' />
          <Message text={this.props.text} />
        </ul>

      </div>
    );
  }
}

export default App;
