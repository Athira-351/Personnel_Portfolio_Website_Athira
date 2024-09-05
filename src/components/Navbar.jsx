import React, { useState } from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { Button } from 'primereact/button';
import './Navbar.css';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const items = [
    {
      label: 'About Me',
      items: [
        [
          { label: 'mm' },
          { label: 'Most Popular' }
        ]
      ]
    },
    {
      label: 'Projects',
      items: [
        [
          { label: 'Fingerprint Door Lock System using Arduino' },
          { label: 'Subjective Exam Evaluation using BERT' },
          { label: 'Ecommerce Website (crockery)' }
        ]
      ]
    },
    {
      label: 'Contact',
      items: [
        [
          { label: 'Facebook' },
          { label: 'Twitter' }
        ]
      ]
    }
  ];

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="navbar">
      <div className="navbar-brand" style={{marginLeft:'4vw'}}>
        <h2>Athira Anil</h2>
      </div>
      <div className="menu-desktop">
        <MegaMenu model={items} orientation="horizontal" />
      </div>
      <div className="menu-mobile">
        <Button icon="pi pi-bars" onClick={toggleMenu} className="hamburger-button p-button-rounded p-button-primary" />
        {isMenuVisible && (
          <div className="mobile-menu-content animated fadeIn">
            {items.map((menu, index) => (
              <div key={index} className="mobile-menu-category">
                <h3>{menu.label}</h3>
                {menu.items.map((group, groupIndex) => (
                  <div key={groupIndex} className="mobile-menu-group">
                    {group.map((item, itemIndex) => (
                      <p key={itemIndex} className="mobile-menu-item">
                        {item.label}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
