import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import PhoneIcon from '@mui/icons-material/Phone';
import timeless from '../assets/timless.png'
export default function SignUp() {
    const jaldiFontStyle = {
        fontFamily: 'Jaldi, sans-serif',
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    };

    const inputFieldStyle = {
        marginBottom: '20px',
        padding: '10px', // Added padding
        border: '1px solid gray', // Added gray border
        borderRadius: '10px', // Rounded corners
        width: '100%',
        boxSizing: 'border-box', // Ensure padding and border are included in the width
        color: 'gray',
        backgroundColor: '#121926',
        padding: 16,
        fontSize: 16,
        '&::placeholder': {
            color: 'gray',
        },
    };

    const signInButtonStyle = {
        ...jaldiFontStyle,
        borderRadius: '20px',
        backgroundColor: '#8F56ED',
        color: 'white',
    };

    const socialPlatformTextStyle = {
        ...jaldiFontStyle,
        color: 'gray',
        marginBottom: '10px',
    };

    const iconContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '20px',
        color: 'white'
    };

    const iconStyle = {
        fontSize: 40,
        color: 'white', // Change the color as needed
        cursor: 'pointer',
        margin: '0 10px', // Added space around icons
        border: '1px solid gray', // Added gray border
        borderRadius: '10px', // Rounded corners
        padding: '5px', // Added padding
    };

    const createAccountTextStyle = {
        ...jaldiFontStyle,
        color: '#8F56ED',
    };

    return (
        <Container component="div" maxWidth="xs" style={containerStyle}>
            <div>
            <div style={{ display: 'flex', alignItems: 'center', margin:"20px" }}>
                <img style={{ width: 60, height: 60 }} src={timeless} alt="Timeless Logo" />
                <Typography variant="h3" sx={{ color: 'white', marginLeft: 2 }}>
                    Timeless
                </Typography>
            </div>

                <Typography variant="h5" style={{ ...jaldiFontStyle, marginBottom: '10px' }}>
                    <span>Get Started</span>
                </Typography>
                <Typography variant="body1" style={{ ...jaldiFontStyle, marginBottom: '20px', color: 'gray' }}>
                    Create an account by using the form below.
                </Typography>

                <input
                    required
                    type="text"
                    placeholder="Enter Email Adress here ..."
                    style={inputFieldStyle}
                />

                <input
                    required
                    type="password"
                    placeholder="Enter Password here ..."
                    style={inputFieldStyle}
                />

                <Grid container spacing={2} style={{ marginBottom: '20px' }}>
                    <Grid item xs={6} justifyContent={"flex-end"}>
                        {/* "SignUp" Button */}
                        <Button  fullWidth variant="contained" color="primary" style={signInButtonStyle}>
                            <Typography style={jaldiFontStyle}>SignUp</Typography>
                        </Button>
                    </Grid>
                </Grid>

                {/* Social Platform Text */}
                <Typography variant="body1" style={socialPlatformTextStyle}>
                    Use a social platform to continue.
                </Typography>

                {/* Social Platform Icons */}
                <div style={iconContainerStyle}>
                    <GoogleIcon  style={iconStyle} />
                    <AppleIcon style={iconStyle} />
                    <PhoneIcon style={iconStyle} />
                </div>

                {/* Additional Text */}
                <Typography variant="body1" style={createAccountTextStyle}>
                    Already have an account? <span style={{ color: 'gray' }}>Login</span>
                </Typography>
            </div>
        </Container>
    );
}
