import React from "react";
import * as classes from "./navbar.module.css";
import Logo from "../../components/Logo/Logo";
import { NavLink } from "react-router-dom";



const Nav = (props) => {

  let home = (
    <button
          id='home'
          type="click"
          className="btn-floating btn-large waves-effect waves-light transparent"
          onClick={e => props.startSearch(e)}
        >
         <i id='homeIcon'className="material-icons">home</i>
        </button>
  );

    return (
      <div className={classes.nav}>
        <Logo />
        <NavLink to='/' exact>
        {home}
        </NavLink>
       
      </div>
  );
};

export default Nav;
