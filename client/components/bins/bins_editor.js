import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import CodeMirror from 'react-codemirror';
// Just run the js file from the node_modules
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component{
  onEditorChange(content){
    // console.log(content);
    Meteor.call('bins.update',this.props.bin,content);
  }

  render(){
    return(
      <div className="cox-xs-8">
      <h3>Now editing {this.props.bin._id}</h3>
      <CodeMirror
        value={this.props.bin.content}
        options={{mode: 'markdown', lineNumbers: true}}
        onChange={this.onEditorChange.bind(this)}
      />
      </div>
    );
  }
}

export default BinsEditor;
