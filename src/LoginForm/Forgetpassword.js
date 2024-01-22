import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputLabel from '@mui/material/InputLabel';

export default function Forgetpassword() {
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
        // Center-align the content
    };

    const inputStyle = {
        width: '100%',
        marginBottom: '20px',
        borderRadius: '50px',
        color: 'gray',
        backgroundColor: '#0D121D',
        padding: '16px',
        fontSize: '16px',
    };

    const backButtonStyle = {
        position: 'absolute',
        left: '10px',
        top: '35%',
        cursor: 'pointer',
    };

    const sendResetLinkButtonStyle = {
        backgroundColor: '#8F56ED',
        color: 'white',
        borderRadius: '20px',
    };

    return (
        <Container component="div" maxWidth="xs" sx={containerStyle}>
            <div style={formStyle}>
                <ArrowBackIcon style={backButtonStyle} />
                <Typography variant="h4" gutterBottom>
                    Forgot Password
                </Typography>
                <Typography variant="body1"  paragraph>
                    We will send you an email with a link to reset your password, please enter the email associated with your account below.
                </Typography>

                <InputLabel htmlFor="email" sx={{ color: 'gray', fontSize: "14px" }}>
                    Email Address
                </InputLabel>
                <Input
                    required
                    fullWidth
                    placeholder="Your Email"
                    disableUnderline
                    sx={inputStyle}
                />

                <Button variant="contained" sx={sendResetLinkButtonStyle}>
                    Send Reset Link
                </Button>
            </div>
        </Container>
    );
}
