import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import {IconButton, ListItemText} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import "../index.css"
import timeless from "../assets/timless.png"


const drawerWidth = 240;

export default function SideBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: 50, height: 50 }} src={timeless} alt="Timeless Logo" />
                <Typography variant="h5" sx={{ color: 'white', marginLeft: 2 }}>
                    Timeless
                </Typography>
            </div>

        <Divider />
      <List sx={{ color: 'white' }}>
            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <LeaderboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <SearchIcon/>
                </ListItemIcon>
                <ListItemText primary="Scan" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <MenuBookIcon/>
                </ListItemIcon>
                <ListItemText primary="String" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <SettingsBackupRestoreIcon/>
                </ListItemIcon>
                <ListItemText primary="Changelog" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <GroupIcon/>
                </ListItemIcon>
                <ListItemText primary="Manage Team" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <SchoolIcon/>
                </ListItemIcon>
                <ListItemText primary="Purchase" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                    <AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>
            </List>
     
    </div>
  );


  return (

    <div>
         
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
        aria-label="mailbox folders"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  backgroundColor:'#121926' },
          }}
        >
            <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>

          {drawer}
        </Drawer>
       
       
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#121926' },
          }}
          open
        >

          {drawer}
        </Drawer>
      </Box>
      
    </div>
   
  );
}




