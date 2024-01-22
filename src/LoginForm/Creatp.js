import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function CreateProfile() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    };

    const formStyle = {
        width: '80%',
        maxWidth: '400px',
        marginTop: '20px',
        textAlign: 'center',
    };

    const inputStyle = {
        width: '100%',
        marginBottom: '20px',
        borderRadius: '10px',
        color: 'gray',
        backgroundColor: '#0D121D',
        padding: '16px',
        fontSize: '16px',
        border: 'none',
        outline: 'none',
    };

    const iconStyle = {
        fontSize: '60px',
        color: 'gray',
        border: '2px solid gray',
        borderRadius: '50%',
        padding: '10px',
        marginBottom: '20px',
    };

    const signInButtonStyle = {
        backgroundColor: '#8F56ED',
        color: 'white',
        borderRadius: '20px',
    };

    return (
        <Container component="div" maxWidth="xs" style={containerStyle}>
            <div style={formStyle}>
                <Typography variant="h4" gutterBottom>
                    Create Profiles
                </Typography>
                <PersonOutlineOutlinedIcon style={iconStyle} />

                <input
                    type="text"
                    placeholder="Your Name"
                    style={inputStyle}
                />

                <input
                    type="text"
                    placeholder="Your City"
                    style={inputStyle}
                />

                <input
                    type="text"
                    placeholder="Your State"
                    style={inputStyle}
                />

                <input
                    type="text"
                    placeholder="Bio"
                    style={inputStyle}
                />

                <Button fullWidth variant="contained" style={signInButtonStyle}>
                    Save Changes
                </Button>
            </div>
        </Container>
    );
}
