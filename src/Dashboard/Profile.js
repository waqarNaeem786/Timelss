import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Box, useTheme, useMediaQuery} from '@mui/material';
import {Divider} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import IosShareIcon from '@mui/icons-material/IosShare';
import Sidebar from "../componennts/SideBar"

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  

export default function Profile(){
        
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Box>
            <Sidebar/>
            <Container sx={{marginLeft: { xs: 'auto', sm: isSmallScreen ? 'auto' : 35 }}}>

        <Paper style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor:"#0D121D", borderTopLeftRadius:"15px",borderTopRightRadius:"15px" }}>
            <div>
                <Typography variant={"h3"} sx={{color:"white"}}>
                    Profile
                </Typography>
            </div>

            <div>
                <Button
                    variant={'contained'}
                    color="primary"
                    style={{ backgroundColor: '#6436C1', }}
                >
                    <AddIcon />
                    Edit
                </Button>
            </div>
        </Paper>


        <Divider/>
        <Container  sx={{backgroundColor:"#0D121D", padding:"1%"}}>
        <Paper sx={{backgroundColor:"#0D121D"}}>
            <Typography variant='h5' sx={{color:"white"}}>
                Account
            </Typography>       
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', backgroundColor:"#0D121D"}}>
            
            <Typography variant='subtitle1' sx={{color:"white"}}>
                Switch To Light mode
            </Typography>
            <FormGroup>
                <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                />
            </FormGroup>
        </Box>
        </Paper>
        <Divider/>
        <Paper sx={{backgroundColor:"#0D121D"}}>
                <label htmlFor="copy-button">
                    <LanguageIcon id="left-icon" />
                    <input name="copy-button" aria-label="copy-button" placeholder="Country" />
                    <ArrowForwardIosIcon id="right-icon" />
                </label>

        </Paper>        
        <Divider/>
        <Paper sx={{backgroundColor:"#0D121D"}}>
        <label htmlFor="copy-button">
                    <AccountCircleIcon id="left-icon" />
                    <input name="copy-button" aria-label="copy-button" placeholder="Edit Profile" />
                    <ArrowForwardIosIcon id="right-icon" />
                </label>

        </Paper> 

     
        <Divider/>
        <Paper sx={{backgroundColor:"#0D121D", marginTop: '16px', borderRadius:"5px"}}>
            <Typography variant='h5' sx={{color:"white"}}>
                General
            </Typography>       
        
        </Paper>
        <Divider/>
        <Paper sx={{backgroundColor:"#0D121D"}}>
        <label htmlFor="copy-button">
                    <HelpIcon id="left-icon" />
                    <input name="copy-button" aria-label="copy-button" placeholder="Support" />
                    <ArrowForwardIosIcon id="right-icon" />
                </label>

        </Paper>        

        <Divider/>
        <Paper sx={{backgroundColor:"#0D121D"}}>
        <label htmlFor="copy-button">
                    <PrivacyTipIcon id="left-icon" />
                    <input name="copy-button" aria-label="copy-button" placeholder="Terms and Services" />
                    <ArrowForwardIosIcon id="right-icon" />
                </label>

        </Paper> 

        <Divider/>
        <Paper sx={{backgroundColor:"#0D121D"}}>
        <label htmlFor="copy-button">
            <IosShareIcon id="left-icon" />
                <input name="copy-button" aria-label="copy-button" placeholder="Invire Friend" />
            <ArrowForwardIosIcon id="right-icon" />
        </label>

        </Paper> 


        </Container>
        

    </Container>
        </Box>
        
    )
}