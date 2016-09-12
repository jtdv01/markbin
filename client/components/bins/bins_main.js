import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';

class BinsMain extends Component{
  render(){
    if(!this.props.bin){return <div>Loading...</div>;}
    // console.log(this.props.params.binId);
    return(
      <div>
        <BinsEditor bin={this.props.bin} />
      </div>
    );
  }
}

export default createContainer((props)=>{
  const { binId } = props.params;
  // debugger;
  // console.log(binId);
  // Subscribe to the list of bins
  Meteor.subscribe('bins');
  // Pass in the real bin object
  return{bin: Bins.findOne(binId)};
},BinsMain);
