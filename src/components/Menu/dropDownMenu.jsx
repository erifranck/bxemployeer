import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from "../Button/Button";
import "./dropDownMenu.css";
 
export class DropDownMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.showMenu}>
        <span className='bx-menu-icon'/>
        <span className='bx-menu-icon'/>
        <span className='bx-menu-icon'/>
        </div>
        
        {
          this.state.showMenu
            ? (
              <div className="dropdown" style = {{background: "white"}}>
                <Button> <Link to="/">Home</Link>  </Button>
                <Button>  <Link to="/employee-list">People</Link></Button>
                <Button> <Link to="/about">About</Link> </Button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}