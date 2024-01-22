import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SideBar from '../componennts/SideBar';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const Strings = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SideBar />
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* First Set of Papers */}
        <Paper
            elevation={3}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Align items to the start (left)
                width: isSmallScreen ? '90%' : '50%',
                padding: '20px',
                margin: '16px',
                backgroundColor: '#0D121D',
                color: 'white',
                borderRadius: '15px',
            }}
            >
            <Typography variant="h6">Welcome Alex</Typography>
            <Typography variant="body1">
                You can download string from here.
            </Typography>
            <Button variant="outlined" style={{ border: '2px solid gray', marginTop: '16px', alignSelf: 'flex-end' }}>
                <CloudDownloadIcon style={{ marginRight: '8px' }} />
                Download
            </Button>
            </Paper>


        {/* Second Set of Papers */}
        <Paper
          elevation={3}
          style={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            width: isSmallScreen ? '90%' : '50%',
            padding: '20px',
            margin: '16px',
            backgroundColor: '#0D121D',
            color: 'white',
            borderRadius: '15px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <DataObjectIcon style={{ marginRight: '8px', color: 'gray' }} />
            <Typography variant="h6">String Extractor</Typography>
          </div>
          <Typography variant="p">Extractor String from jar or exe</Typography>
          <div style={{ marginTop: '20px', width: '100%' }}>
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
              style={{
                backgroundColor: '#0D121D',
                color: 'white',
                border: '1px solid gray',
                width: '100%',
              }}
            />
          </div>
        </Paper>

        {/* Third Set of Papers */}
        <Paper
          elevation={3}
          style={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            width: isSmallScreen ? '90%' : '50%',
            padding: '20px',
            margin: '16px',
            backgroundColor: '#0D121D',
            color: 'white',
            borderRadius: '15px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <DataObjectIcon style={{ marginRight: '8px', color: 'gray' }} />
            <Typography variant="h4">Extractored String</Typography>
          </div>
          <Typography variant="p" sx={{ margin: '2%' }}>File Name: </Typography>
          <Typography variant="p" sx={{ margin: '2%' }}>File Size: </Typography>
          <Typography variant="p" sx={{ margin: '2%' }}>SHA: </Typography>
          <Typography variant="p" sx={{ margin: '2%' }}>MD5: </Typography>
          <Typography variant="p" sx={{ margin: '2%' }}>DPS: </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default Strings;
