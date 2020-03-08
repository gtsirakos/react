import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Contact from './Contact';
import {Link} from "react-router-dom";


class Home extends Component {
    constructor(props) {
        super(props);
    }
render() {
  return (
  <div>
     <div class="box">
		First Box <br/>   
            <button><Link to ="/contact">Click Me</Link></button>
            <div className="buttons"><Link to ="/">Go Back</Link>
            </div>
        {/* <Switch>
            <Route path="/contact" component = {Contact}/>
            <Route exact path="/home" component = {Home} />
        </Switch> */}
        </div>  
    </div>
  );  
}  
}
export default Home;