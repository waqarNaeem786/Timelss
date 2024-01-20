import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function PhoneSignIn() {
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
                <Typography variant="h3" align="center" gutterBottom>
                    Phone Sign In
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    Type in your phone number below to register.
                </Typography>

                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Your Phone Number"
                    placeholder="Please enter a valid number"
                    style={textFieldStyle}
                    variant="outlined"
                />

                <Button fullWidth variant="contained" style={signInButtonStyle}>
                    Sign In with Phone
                </Button>
            </div>
        </Container>
    );
}
