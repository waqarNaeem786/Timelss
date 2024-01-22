import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Input from '@mui/material/Input';

export default function PhoneSignIn() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        position: 'relative',
    };

    const formStyle = {
        width: '80%',
        maxWidth: '400px',
        marginTop: '20px',
    };

    const inputStyle = {
        width: '100%',
        marginBottom: '20px',
        borderRadius: '50px',
        color: 'gray',
        backgroundColor: '#0D121D',
        padding: '16px',
        fontSize: '16px',
        border: '1px solid #121926', // Added border to match the padding
    };

    const backButtonStyle = {
        position: 'absolute',
        left: '10px',
        top: '35%',
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
                <Typography variant="body1" paragraph>
                    Type in your phone number below to register.
                </Typography>

                <Input
                    required
                    fullWidth
                    placeholder="Please enter a valid number"
                    style={inputStyle}
                />

                <Button variant="contained" style={signInButtonStyle}>
                    Sign In with Phone
                </Button>
            </div>
        </Container>
    );
}
