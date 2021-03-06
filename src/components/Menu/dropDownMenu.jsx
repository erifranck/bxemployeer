import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from "../Button/Button";
import "./dropDownMenu.css";
import { classNames } from '../../utils/classNames';
 
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
      const clases = classNames({"dropdown": true, "hide": !this.state.showMenu})
    return (
      <div>
        <div onClick={this.showMenu}>
        <span className='bx-menu-icon'/>
        <span className='bx-menu-icon'/>
        <span className='bx-menu-icon'/>
        </div>
     
                <ul className={clases} style = {{background: "white"}}>
                    <li> <a href="/">Home</a> </li>
                    <li> <a href="/employee-list">Employee</a></li>
                    <li> <a href="/about">About</a></li>
                 </ul>
              
      </div>
    );
  }
}