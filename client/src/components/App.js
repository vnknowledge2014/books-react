import React, { Component } from 'react';
import '../styles/bulma.min.css';
import '../styles/App.css';

import BookAdd from './BookAdd';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
    }
  }

  toggleModal = () => {    
    this.setState({ modalState: !this.state.modalState })
  }

  render() {
    return (
      <>
      <a className="button is-primary" onClick={this.toggleModal}>Open Modal</a>
      <div className="App">
        <BookAdd modalState={this.state.modalState} closeModal={this.toggleModal} username={"doconut@hotmail.com"}/>
      </div>
      </>
    );
  }
}

export default App;
