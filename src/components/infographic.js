import React, {Component} from 'react';
import SideBar from './sidebar'

class Infographic extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main-div">
       		<div id="main_title">
            <h4>How Can You Improve Your Soil's Health?</h4>  
          </div>
        </div>
      </div>
    );
  }
}

export default Infographic;