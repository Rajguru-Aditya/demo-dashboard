import React from 'react';
import { Navbar, Alignment, Button, Classes, Icon, Popover, Menu, MenuItem } from '@blueprintjs/core';
import { Link, useNavigate } from 'react-router-dom';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import Home1 from './Home1';

const Nav = () => {
  const navbarStyle = {
    backgroundColor: '#2884d4',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '1px',
    paddingBottom: '1px',
  };

  const headingStyle = {
    margin: '0',
    lineHeight: '1',
    fontWeight: 'bold',
    color: 'white',
  };

  const buttonStyle = {
    marginRight: '24px',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '5px',
    color: 'white',
  };

  const masterSubMenu = [
    {
      text: 'Nested Item 1',
      onClick: () => console.log('Nested Item 1 clicked'),
      submenu: [
        { text: 'Nested Subitem 1', onClick: () => console.log('Nested Subitem 1 clicked'), to: '/nested-subitem-1' },
        { text: 'Nested Subitem 2', onClick: () => console.log('Nested Subitem 2 clicked'), to: '/nested-subitem-2' },
      ],
    },
    { text: 'Nested Item 2', onClick: () => console.log('Nested Item 2 clicked'), to: '/nested-item-2' },
    { text: 'Nested Item 3', onClick: () => console.log('Nested Item 3 clicked'), to: '/nested-item-3' },
  ];
  const marketingSubMenu = [
    {
      text: 'Nested Item 1',
      onClick: () => console.log('Nested Item 1 clicked'),
      submenu: [
        { text: 'Nested Subitem 1', onClick: () => console.log('Nested Subitem 1 clicked'), to: '/nested-subitem-1' },
        { text: 'Nested Subitem 2', onClick: () => console.log('Nested Subitem 2 clicked'), to: '/nested-subitem-2' },
      ],
    },
    { text: 'Nested Item 2', onClick: () => console.log('Nested Item 2 clicked'), to: '/nested-item-2' },
    { text: 'Nested Item 3', onClick: () => console.log('Nested Item 3 clicked'), to: '/nested-item-3' },
  ];
  const transactionSubMenu = [
    {
      text: 'Nested Item 1',
      onClick: () => console.log('Nested Item 1 clicked'),
      submenu: [
        { text: 'Nested Subitem 1', onClick: () => console.log('Nested Subitem 1 clicked'), to: '/nested-subitem-1' },
        { text: 'Nested Subitem 2', onClick: () => console.log('Nested Subitem 2 clicked'), to: '/nested-subitem-2' },
      ],
    },
    { text: 'Nested Item 2', onClick: () => console.log('Nested Item 2 clicked'), to: '/nested-item-2' },
    { text: 'Nested Item 3', onClick: () => console.log('Nested Item 3 clicked'), to: '/nested-item-3' },
  ];
  const accountSubMenu = [
    {
      text: 'Nested Item 1',
      onClick: () => console.log('Nested Item 1 clicked'),
      submenu: [
        { text: 'Nested Subitem 1', onClick: () => console.log('Nested Subitem 1 clicked'), to: '/nested-subitem-1' },
        { text: 'Nested Subitem 2', onClick: () => console.log('Nested Subitem 2 clicked'), to: '/nested-subitem-2' },
      ],
    },
    { text: 'Nested Item 2', onClick: () => console.log('Nested Item 2 clicked'), to: '/nested-item-2' },
    { text: 'Nested Item 3', onClick: () => console.log('Nested Item 3 clicked'), to: '/nested-item-3' },
  ];
  const supportSubMenu = [
    {
      text: 'Nested Item 1',
      onClick: () => console.log('Nested Item 1 clicked'),
      submenu: [
        { text: 'Nested Subitem 1', onClick: () => console.log('Nested Subitem 1 clicked'), to: '/nested-subitem-1' },
        { text: 'Nested Subitem 2', onClick: () => console.log('Nested Subitem 2 clicked'), to: '/nested-subitem-2' },
      ],
    },
    { text: 'Nested Item 2', onClick: () => console.log('Nested Item 2 clicked'), to: '/nested-item-2' },
    { text: 'Nested Item 3', onClick: () => console.log('Nested Item 3 clicked'), to: '/nested-item-3' },
  ];
  const reportSubMenu = [
    {
      text: 'Nested Item 1',
      onClick: () => console.log('Nested Item 1 clicked'),
      submenu: [
        { text: 'Nested Subitem 1', onClick: () => console.log('Nested Subitem 1 clicked'), to: '/nested-subitem-1' },
        { text: 'Nested Subitem 2', onClick: () => console.log('Nested Subitem 2 clicked'), to: '/nested-subitem-2' },
      ],
    },
    { text: 'Nested Item 2', onClick: () => console.log('Nested Item 2 clicked'), to: '/nested-item-2' },
    { text: 'Nested Item 3', onClick: () => console.log('Nested Item 3 clicked'), to: '/nested-item-3' },
  ];
  const webappSubMenu = [
    {
      text: 'Nested Item 1',
      onClick: () => console.log('Nested Item 1 clicked'),
      submenu: [
        { text: 'Nested Subitem 1', onClick: () => console.log('Nested Subitem 1 clicked'), to: '/nested-subitem-1' },
        { text: 'Nested Subitem 2', onClick: () => console.log('Nested Subitem 2 clicked'), to: '/nested-subitem-2' },
      ],
    },
    { text: 'Nested Item 2', onClick: () => console.log('Nested Item 2 clicked'), to: '/nested-item-2' },
    { text: 'Nested Item 3', onClick: () => console.log('Nested Item 3 clicked'), to: '/nested-item-3' },
  ];
  const settingSubMenu = [
    {
      text: 'Nested Item 1',
      onClick: () => console.log('Nested Item 1 clicked'),
      submenu: [
        { text: 'Nested Subitem 1', onClick: () => console.log('Nested Subitem 1 clicked'), to: '/nested-subitem-1' },
        { text: 'Nested Subitem 2', onClick: () => console.log('Nested Subitem 2 clicked'), to: '/nested-subitem-2' },
      ],
    },
    { text: 'Nested Item 2', onClick: () => console.log('Nested Item 2 clicked'), to: '/nested-item-2' },
    { text: 'Nested Item 3', onClick: () => console.log('Nested Item 3 clicked'), to: '/nested-item-3' },
  ];

  const navigate = useNavigate();

  const handleItemClick = (to) => {
    navigate(to);
  };

  const renderNestedMenu = (nestedItems) => (
    <Menu>
      {nestedItems.map((item) => (
        <MenuItem key={item.text} text={item.text} onClick={() => handleItemClick(item.to)}>
          {item.submenu && item.submenu.length > 0 ? (
            <SubMenu submenu={item.submenu} />
          ) : null}
        </MenuItem>
      ))}
    </Menu>
  );

  const SubMenu = ({ submenu }) => (
    <Menu>
      {submenu.map((item) => (
        <MenuItem key={item.text} text={item.text} onClick={() => handleItemClick(item.to)}>
          {item.submenu && item.submenu.length > 0 ? (
            <SubMenu submenu={item.submenu} />
          ) : null}
        </MenuItem>
      ))}
    </Menu>
  );

  const renderButtonWithNestedMenu = (text, icon, submenu, to) => (
    <Popover content={renderNestedMenu(submenu)} position="bottom">
      <Button className={Classes.MINIMAL} style={buttonStyle}>
        <Icon icon={icon} iconSize={16} style={iconStyle} />
        {text}
      </Button>
    </Popover>
  );

  const buttonsData = [
    { text: 'Master', icon: 'home', submenu: masterSubMenu },
    { text: 'Marketing', icon: 'globe', submenu: marketingSubMenu },
    { text: 'Transaction', icon: 'credit-card', submenu: transactionSubMenu },
    { text: 'Account', icon: 'person', submenu: accountSubMenu },
    { text: 'Support', icon: 'lifesaver', submenu: supportSubMenu },
    { text: 'Report', icon: 'chart', submenu: reportSubMenu },
    { text: 'WebApp', icon: 'grid-view', submenu: webappSubMenu },
    { text: 'Settings', icon: 'cog', submenu: settingSubMenu },
  ];

  return (
    <>
    <Navbar fixedToTop className={`${Classes.DARK} ${Classes.SMALL}`} style={navbarStyle}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading style={headingStyle}>Dashboard</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Navbar.Divider style={{ marginRight: '24px' }} />
        {buttonsData.map((button) => (
          <Link to={button.to} key={button.text}>
            {renderButtonWithNestedMenu(button.text, button.icon, button.submenu, button.to)}
          </Link>
        ))}
      </Navbar.Group>
    </Navbar>
    <Home1/>
    </>
  );
};

export default Nav;
