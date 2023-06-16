import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  // list-style-type: circle;
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
        </NavLink>
        <NavLink 
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
        >
        Movies
        </NavLink>
        <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
        >
        Directors
        </NavLink>
        <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
        >
        Actors
        </NavLink>   
    </div>
  );
};

export default NavBar;
