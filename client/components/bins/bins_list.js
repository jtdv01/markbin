import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Bins} from '../../../imports/collections/bins';
import { Link } from 'react-router';

class BinsList extends Component{
  onBinRemove(bin){
    Meteor.call('bins.remove',bin);
  }
  renderList(){

    return this.props.bins.map(b =>{
      const url = `/bins/${b._id}`;
      return(
        <li className="list-group-item" key={b._id}>
          <Link to={url}> Bin {b._id} </Link>
          <span className="pull-right">
            <button className="btn btn-danger"
              onClick={() => this.onBinRemove(b)}>
            Remove
            </button>
          </span>
        </li>
      );
    });
  }

  render(){
    console.log(this.props.bins);
    return(
    <div>
      <ul className="list-group">
        {this.renderList()}
      </ul>
    </div>
    );
  }
}

/*
 First param is a fat arrow function. Whatever we return from that
 fat arrow func, will be accesisble in the BinsList class
*/
export default createContainer(() => {
  // Will only subscribe to those owned by user
  Meteor.subscribe('bins');
  return {bins:Bins.find({}).fetch()};
}, BinsList)
