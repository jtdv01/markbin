import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

class BinsMain extends Component{
  render(){
    if(!this.props.bin){return <div>Loading...</div>;}
    // console.log(this.props.params.binId);
    return(
      <div>
        <BinsEditor bin={this.props.bin} />
        <BinsViewer bin={this.props.bin} />
        <BinsShare bin={this.props.bin}/>
      </div>
    );
  }
}

export default createContainer((props)=>{
  // Coming from the router bin/:binId
  const { binId } = props.params;

  // debugger;
  // console.log(binId);
  // Subscribe to the list of bins
  Meteor.subscribe('bins');
  // Also subscribing to bins that have been shared to
  // now in the Bins. collection too
  Meteor.subscribe('sharedBins');

  // Pass in the real bin object
  return{bin: Bins.findOne(binId)};
},BinsMain);
