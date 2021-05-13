import logo from './logo.svg';
import './style/App.css';
import AuthorizationButton from "./components/AuthorizationButton";
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import './style/AuthorizationButton.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        textButton: "Войти",
        messageClickButton: "Как-то, так!"
    };
}


render() {  
  return (
  <div className="header">
    <AuthorizationButton textButton={this.state.textButton} messageClickButton={this.state.messageClickButton}/>
  </div>
  );
  }
}


