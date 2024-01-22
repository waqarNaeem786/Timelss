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
                <img style={{ width: 80, height: 80 }} src={timeless} alt="Timeless Logo" />
                <Typography variant="h5" sx={{ color: 'white', }}>
                    Timeless
                </Typography>
            </div>

        <br/>
        <Divider />
        <Typography sx={{color: "lightgray"}} variant="p">
            Menu
        </Typography>
      <List sx={{ color: 'white' }}>
            <ListItemButton sx={{ '&:hover': { backgroundColor: '#121926',borderRadius: 5 } }}>
                <ListItemIcon sx={{ color: 'white' }}>
                    <LeaderboardIcon sx={{ '&:hover': { color: '#FF1A5B' } }}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>

            <ListItemButton sx={{ '&:hover': { backgroundColor: '#121926',borderRadius: 5 } }}>
                <ListItemIcon sx={{ color: 'white' }}>
                    <SearchIcon sx={{ '&:hover': { color: '#FF1A5B' } }}/>
                </ListItemIcon>
                <ListItemText primary="Scan" />
            </ListItemButton>

            <ListItemButton sx={{ '&:hover': { backgroundColor: '#121926',borderRadius: 5 } }}>
                <ListItemIcon sx={{ color: 'white' }}>
                    <MenuBookIcon sx={{ '&:hover': { color: '#FF1A5B' } }}/>
                </ListItemIcon>
                <ListItemText primary="String" />
            </ListItemButton>

            <ListItemButton sx={{ '&:hover': { backgroundColor: '#121926',borderRadius: 5 } }}>
                <ListItemIcon sx={{ color: 'white' }}>
                    <SettingsBackupRestoreIcon sx={{ '&:hover': { color: '#FF1A5B' } }} />
                </ListItemIcon >
                <ListItemText primary="Changelog" />
            </ListItemButton>

            <ListItemButton sx={{ '&:hover': { backgroundColor: '#121926',borderRadius: 5 } }}>
                <ListItemIcon sx={{ color: 'white' }}>
                    <GroupIcon sx={{ '&:hover': { color: '#FF1A5B' } }}/>
                </ListItemIcon>
                <ListItemText primary="Manage Team" />
            </ListItemButton>

            <ListItemButton sx={{ '&:hover': { backgroundColor: '#121926',borderRadius: 5 } }}>
                <ListItemIcon sx={{ color: 'white' }}>
                    <SchoolIcon sx={{ '&:hover': { color: '#FF1A5B' } }}/>
                </ListItemIcon>
                <ListItemText primary="Purchase" />
            </ListItemButton>

            <ListItemButton sx={{ '&:hover': { backgroundColor: '#121926', borderRadius: 5 } }}>
                <ListItemIcon sx={{ color: 'white' }}>
                    <AccountCircleIcon sx={{ '&:hover': { color: '#FF1A5B' } }}/>
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItemButton>
            </List>

            <Divider/>

            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              top: "10%",
              backgroundColor:"#121926",
              padding:"5%",
              borderRadius:"15%",
              
              }}>
              <div style={{display:"flex"}}>
                <AccountCircleIcon sx={{color:"white"}}/>
                <h5 style={{color:"white"}}>Alex</h5>
              </div>
              
              <Divider style={{color:"white"}}/>
              <h5 style={{color:"white"}}>License Info</h5>
              <p style={{color:"white"}}>Your License: Coustomer</p>
              <Divider sx={{color:"white"}}/>
              <h5 style={{color:"white"}}>Logout</h5>
            </div>
     
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  backgroundColor:'#0D121D' },
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'#0D121D' },
          }}
          open
        >

          {drawer}
        </Drawer>
      </Box>
      
    </div>
   
  );
}




