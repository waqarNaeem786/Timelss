import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Forgetpassword() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        position: 'relative', // Added position relative
    };

    const formStyle = {
        width: '80%',
        maxWidth: '400px',
        marginTop: '20px',
    };

    const textFieldStyle = {
        width: '100%',
        marginBottom: '20px',
        borderRadius: '10px',
    };

    const backButtonStyle = {
        position: 'absolute', // Changed position to absolute
        left: '10px',
        top: '35%', // Adjusted top value
        cursor: 'pointer',
    };

    const signInButtonStyle = {
        backgroundColor: '#8F56ED',
        color: 'white',
        borderRadius: '20px',
    };

    return (
        <Container component="div" maxWidth="xs" style={containerStyle}>
            <div style={formStyle}>
                <ArrowBackIcon style={backButtonStyle} />
                <Typography variant="h4" align="center" gutterBottom>
                    Forgot Password
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    We will send you an email with a link to reset your password, please enter the email associated with your account below.                </Typography>

                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Your Email"
                    placeholder="Please enter your Email to recive Link..."
                    style={textFieldStyle}
                    variant="outlined"
                />

                <Button fullWidth variant="contained" style={signInButtonStyle}>
                    SendResetLink
                </Button>
            </div>
        </Container>
    );
}
