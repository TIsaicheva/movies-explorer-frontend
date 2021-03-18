import React from 'react';
import './Navigation.css';

function Navigation({children, menuModifier}) {
  return (
    <nav className={`menu ${menuModifier}`}>{children}</nav>
  );
}

export default Navigation;