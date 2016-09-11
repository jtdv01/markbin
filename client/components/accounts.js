import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {

  // When about to render in screen
  componentDidMount(){
    // Render the Blaze accounts form then
    // find the dive we just rendered in the 'render method'
    // and place the Blaze accounts form in that div
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  // When about to be removed
  componentWillUnmount(){
    // Find the forms we created
    // and destroy them.
    // Need to clean up after ourselves
    Blaze.remove(this.view);
  }


  render(){
    return(
    <div ref="container"></div>
    );
  }
}

export default Accounts;
