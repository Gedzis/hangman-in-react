import React from 'react';
import codingLogo from '../../images/coding.png';
import cctLogo from '../../images/cct.png';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <a href="https://www.vilniuscoding.lt/" className="header__link">
        <img src={codingLogo} className="" alt="Vilnius Coding School" />
      </a>
      <a href="https://www.cornercasetech.com" className="header__link">
        <img src={cctLogo} className="Corner Case Technologies" alt="logo" />
      </a>
    </header>
  );
}

export default Header;
