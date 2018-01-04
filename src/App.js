import React, { Component } from 'react';
import LMap from './components/map/Map';
import Header from './components/header/header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BaseMap: props.SuperSetBaseMap,
      CurrenBaseMap: props.SuperMap
    }
    console.log(this.props)
  }

  render() {
    console.log(this.props.SuperMap);
        return (
        <div className="LandingPage">
          <Header SuperSetBaseMap = {this.state.BaseMap}/>
          <LMap callbackFromApp={this.latLongCallback} SuperMap = {this.state.CurrenBaseMap}/>
        </div>
      );
    }
  }
export default App;


