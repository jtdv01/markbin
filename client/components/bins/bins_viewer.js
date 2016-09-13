import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component{
  render(){
    const rawHTML = markdown.toHTML(this.props.bin.content);
    // WARNING, may be exposed to xss because of user input rendering
    // div tags directly
    return(
      <div className="col-xs-6">
        <h3>Output</h3>
        <div dangerouslySetInnerHTML={{__html: rawHTML}}></div>
      </div>
    );
  }
}

export default BinsViewer;
