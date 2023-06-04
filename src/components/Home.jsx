import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';

const Navbar = styled(AppBar)({
  background: '#2884d4',
});

const Home = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState(null);
  const [activeSubMenu, setActiveSubMenu] = React.useState(false);

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setActiveDropdown(index);
  };

  const handleSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
    setActiveSubMenu(true);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
    setActiveSubMenu(false);
  };

  // Dummy card data
  const cards = [
    {
      heading: 'Elliot Fu',
      description: 'Elliot Fu is a film-maker from New York.',
      button: '+ Add Friend',
      size: '30%',
    },
    {
      heading: 'Veronika Ossi',
      description: 'Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.',
      button: '+ Add Friend',
      size: '30%',
    },
    {
      heading: 'Jenny Hess',
      description: 'Jenny is a student studying Media Management at the New School',
      button: '+ Add Friend',
      size: '30%',
    },
  ];

  return (
    <div>
      <Navbar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {[...Array(10)].map((_, index) => (
            <div key={index}>
              <Button
                color="inherit"
                aria-controls={`dropdown-menu-${index}`}
                aria-haspopup="true"
                onClick={(event) => handleClick(event, index)}
              >
                Comp {index + 1}
                {activeDropdown === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </Button>
              <Menu
                id={`dropdown-menu-${index}`}
                anchorEl={anchorEl}
                open={activeDropdown === index}
                onClose={() => setActiveDropdown(null)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                getContentAnchorEl={null}
              >
                <MenuItem
                  onMouseEnter={(event) => handleSubMenuClick(event)}
                  onMouseLeave={() => setActiveSubMenu(false)}
                >
                  <ListItemText primary={`Sub-Item 1`} />
                  <ChevronRightIcon />
                  <Menu
                    id={`submenu-menu-${index}`}
                    anchorEl={subMenuAnchorEl}
                    open={activeSubMenu}
                    onClose={handleSubMenuClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    getContentAnchorEl={null}
                  >
                    <MenuItem onClick={handleSubMenuClose}>
                      <ListItemText primary={`Sub-Sub-Item 1`} />
                    </MenuItem>
                    <MenuItem onClick={handleSubMenuClose}>
                      <ListItemText primary={`Sub-Sub-Item 2`} />
                    </MenuItem>
                  </Menu>
                </MenuItem>
                <MenuItem onClick={() => setActiveDropdown(null)}>
                  <ListItemText primary={`Sub-Item 2`} />
                  <ChevronRightIcon />
                </MenuItem>
              </Menu>
            </div>
          ))}
        </Toolbar>
      </Navbar>
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
        {cards.map((card, index) => (
          <Card key={index} sx={{ width: card.size, minWidth: '200px' }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}>
                {card.heading}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto' }}>
              <Button
                size="small"
                fullWidth
                sx={{
                  bgcolor: '#f5f5f5',
                  borderRadius: 0,
                  '&:hover': {
                    bgcolor: '#e0e0e0',
                  },
                }}
              >
                {card.button}
              </Button>
            </CardActions>

          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
