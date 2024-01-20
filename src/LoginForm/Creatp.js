import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function Creatp() {
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

    const textFieldStyle = {
        width: '100%',
        marginBottom: '20px',
        borderRadius: '10px',
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

                <TextField
                    fullWidth
                    id="outlined-required"
                    placeholder="Your Name"
                    style={textFieldStyle}
                    variant="outlined"
                />

                <TextField
                    fullWidth
                    id="outlined-required"
                    placeholder="Your City"
                    style={textFieldStyle}
                    variant="outlined"
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    placeholder="Your State"
                    style={textFieldStyle}
                    variant="outlined"
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    placeholder="Bio"
                    style={textFieldStyle}
                    variant="outlined"
                />

                <Button fullWidth variant="contained" style={signInButtonStyle}>
                    Save Changes
                </Button>
            </div>
        </Container>
    );
}
