import React, { Component } from 'react';
import Accounts from './accounts';

// Use browserHistory to navigate the user
import { Link, browserHistory} from 'react-router';

class Header extends Component {
  onBinClick(event){
    event.preventDefault();
    // Callback only after the bin is made
    Meteor.call('bins.insert',(error,returnedBinId) =>{
      // Navigate directly to the newly created binId
      browserHistory.push(`bin/${returnedBinId}`);
    });
  }

  render(){
    return(
      <div>
        <nav className="nav navbar-default">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Markbin</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Accounts />
            </li>
            <li>
              <a href="#" onClick={this.onBinClick.bind(this)}> Create Bin </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
