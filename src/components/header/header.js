import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, Image} from 'react-bootstrap';
import Logo from '../img/logo.PNG';
import ListOfLayers from './modal/listoflayers';
import About from './modal/about';
import {reactLocalStorage} from 'reactjs-localstorage';
//import { LinkContainer } from 'react-router-bootstrap';
//import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key:  "",
      keylist:['streets','satellite','hybrid','topo','gray','dark-gray','oceans','national-geographic','terrain','osm','dark-gray-vector','gray-vector','streets-vector','streets-night-vector','streets-relief-vector','streets-navigation-vector','topo-vector'],
      BaseMap: ""
      //user: props.SuperUser.user
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.quickChange = this.quickChange.bind(this);
    console.log(props);

  }

  quickChange(base){
    if(base == null){
      return 'streets';
    }

  }
  handleSelect(key) {
    // alert(`selected ${key}`);
    this.setState({
      key,
      BaseMap:this.state.keylist[key],
     // BaseMap:this.state.keylist[key]

     });
     this.props.SuperSetBaseMap(this.state.BaseMap);
     this.props.SuperSetBaseMap(this.state.BaseMap);
      reactLocalStorage.set('var', this.state.BaseMap);
      reactLocalStorage.set('var', this.state.BaseMap);
     //reactLocalStorage.setItem('myData', this.state.BaseMap);
     //localStorage.setItem('myData', this.state.BaseMap);

      setTimeout(function () {
        window.location = '/'; //will redirect to your blog page (an ex: blog.html)
     }, 4000); //will call the function after 2 secs.

  }
  render() {
    let number = this.state.key;
    //console.log(this.state.BaseMap);
    return (
      <div className="Header">
        <Navbar collapseOnSelect  >
          <Navbar.Header className="pull-left">
            <Navbar.Brand>
              <div >
                <Image className="Logo"src={Logo} />
              </div>
            </Navbar.Brand>
          </Navbar.Header>

          <Navbar.Collapse className="pull-left">
            <Navbar.Text style={{ 'font-size': '30px' }}>
              Geospaitial Database Viewer
            </Navbar.Text>
            <br/>
            <Navbar.Text style={{ 'font-size': '15px' }}>
              Natural Resources Department, Kalispel Tribe of Indians
            </Navbar.Text>

          </Navbar.Collapse>
          <Navbar.Collapse className="pull-left" >
            <p style={{'color':'white'}}>{this.state.keylist[number]}</p>
          </Navbar.Collapse>
          <Nav className="pull-left" bsStyle="pills" >
            <NavDropdown activeKey={this.state.key} onSelect={this.handleSelect} title="BaseMap Selection" id="basic-nav-dropdown">
                <MenuItem eventKey={0}>streets</MenuItem>
                <MenuItem eventKey={1}>satellite</MenuItem>
                <MenuItem eventKey={2}>hybrid</MenuItem>
                <MenuItem eventKey={3}>topo</MenuItem>
                <MenuItem eventKey={4}>gray</MenuItem>
                <MenuItem eventKey={5}>dark-gray</MenuItem>
                <MenuItem eventKey={6}>oceans</MenuItem>
                <MenuItem eventKey={7}>national-geographic</MenuItem>
                <MenuItem eventKey={8}>terrain</MenuItem>
                <MenuItem eventKey={9}>osm</MenuItem>
                <MenuItem eventKey={10}>dark-gray-vector</MenuItem>
                <MenuItem eventKey={11}>gray-vector</MenuItem>
                <MenuItem eventKey={12}>streets-vector</MenuItem>
                <MenuItem eventKey={13}>streets-night-vector</MenuItem>
                <MenuItem eventKey={14}>streets-relief-vector</MenuItem>
                <MenuItem eventKey={15}>streets-navigation-vector</MenuItem>
                <MenuItem eventKey={16}>topo-vector</MenuItem>
            </NavDropdown>
          </Nav>

          <Nav className="pull-right" bsStyle="pills" >
            <NavDropdown eventKey={3} title="Tools" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}><ListOfLayers /></MenuItem>
                <MenuItem eventKey={3.2}>Spatial Search</MenuItem>
                <MenuItem eventKey={3.3}>Query Data</MenuItem>
                <MenuItem eventKey={3.4}>Draw and Measure</MenuItem>
                <MenuItem eventKey={3.5}>Save/Print</MenuItem>
                <MenuItem eventKey={3.6}>Identify Features</MenuItem>
                <MenuItem eventKey={3.7}><About/></MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
