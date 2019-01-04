import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';

import Wrapper from '../Wrapper';

import './Header.css';

class Header extends Component {
  render() {
    const {section = 'playground'} = this.props.match.params;
    const logoLinkProps = {};
    const sectionsList = [
      {
        id: 'about',
        name: 'About tool',
        url: '/about'
      }
    ];

    if (section !== 'playground') {
      logoLinkProps.to = '/';
    } else {
      logoLinkProps.to = '';
    }

    const navItems = sectionsList.map(item => {
      const {id, name, url} = item;
      const navItemClassList = [
        'Header__nav-link',
        `Header__nav-link-${id}`
      ];

      if (item.id === section) {
        navItemClassList.push('Header__nav-link--current');
        navItemClassList.push(`Header__nav-link-${id}--current`);
      }

      const navItemClass = navItemClassList.join(' ');

      if (item.id === section) {
        return (
          <span
            key={id}
            className={navItemClass}
          >
            <span className="Header__nav-text">{name}</span>
          </span>
        );
      }

      return (
        <NavLink
          key={id}
          to={url}
          className={navItemClass}
        >
          <span className="Header__nav-text">{name}</span>
        </NavLink>
      );
    });

    return (
      <header className="Header">
        <Wrapper>
          <div className="Header__content">
            <h1 className="Header__title">
              <NavLink
                className="Header__logo"
                {...logoLinkProps}
              >SVG Gradient Map Filter</NavLink>
            </h1>

            <nav className="Header__nav">
              {navItems}
            </nav>
          </div>
        </Wrapper>
      </header>
    );
  }
}

export default withRouter(Header);
