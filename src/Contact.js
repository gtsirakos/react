import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class Contact extends Component {
render() {
  return (
    <div className="App">
        <header> <div class = "header">
	React Application Beta 1.1</div>
	</header>
    <div class="mainbodyboxes1">
		<div>Welcome to Contact Page</div><br/>
		<div> What do you want to do?<br/><br/>
		<button class="buttons"> Return to Home</button><br/>
		<button class="buttons"> Go to Posts</button></div>
	</div>
    </div>
  );
  }
}

export default Contact;