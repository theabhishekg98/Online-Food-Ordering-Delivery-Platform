import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BrowserRouter, Route } from 'react-router-dom';
import MarerialUIDrawer from './Drawer';
import { ThemeProvider } from '@material-ui/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCart = () => {
    alert("Hellloo");
    //CART________________________________________________________>>>
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    </Menu>
  );

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#eee',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
  
  // const openDrawer = () => {
  //   return (
  //     <PopupState variant="popover" popupId="demo-popup-menu">
  //       {(popupState) => (
  //         <React.Fragment>
  //           <Button variant="contained" {...bindTrigger(popupState)}>
  //             Dashboard
  //           </Button>
  //           <Menu {...bindMenu(popupState)}>
  //             <MenuItem onClick={popupState.close}>Profile</MenuItem>
  //             <MenuItem onClick={popupState.close}>My account</MenuItem>
  //             <MenuItem onClick={popupState.close}>Logout</MenuItem>
  //           </Menu>
  //         </React.Fragment>
  //       )}
  //     </PopupState>
  //   );
  // }
  const [sanchorEl, setanchorEl] = React.useState(null);
  const open = Boolean(sanchorEl);
  const handleClick = (event) => {
    setanchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setanchorEl(null);
  };

  // const theme = createTheme({
  //   overrides: {
  //     MuiList: {
  //       root:{
  //       width: '30px'
  //       }
  //     }
  //   }
  // });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0.5 }}
          >
            <MarerialUIDrawer/>
          </IconButton> */}
          {/* <BrowserRouter>
            <Switch>
              <Route exact path='/' render=
                  {props => <Home {...props} /> }/>
              <Route exact path='/about' render=
                  {props => <About {...props} /> }/>
              <Route exact path='/contact' render=
                  {props => <Contact {...props} /> }/>
            </Switch>
          </BrowserRouter> */}
            <MarerialUIDrawer/>
          <div className="logo">
            <img src="https://www.ubereats.com/_static/8b969d35d373b512664b78f912f19abc.svg" alt="ubereats logo"/>                
          </div>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>.       Delivery</Typography>
            <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
            <Typography>Pickup</Typography>
          </Stack>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="What are you craving?"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ flexGrow: 1 }}
            />
          </Search>
          {/* <MenuItem autoFocus="true" divider="true" sx={{ flexGrow: 0 }} onClick={handleCart}>Cart</MenuItem> */}
          <div>
            <Button
              id="demo-positioned-button"
              aria-controls="demo-positioned-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Cart
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              sanchorEl={sanchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
              min-width={50} 
              min-height={50}
            >
              {/* <ThemeProvider theme={theme}> */}
                <MenuItem onClick={handleClose}>
                  CART ITEMS
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose}>
                  My account
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose}>
                  Logout
                </MenuItem>
              {/* </ThemeProvider> */}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
