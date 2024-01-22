import { Container, Box, Typography, Paper,useTheme, useMediaQuery, } from "@mui/material"
import DataObjectIcon from '@mui/icons-material/DataObject';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SideBar from "../componennts/SideBar";


export default function Scan(){
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const commonPaperStyle = {
        display: 'flex',
        flexGrow:"3",
        flexDirection: 'column',
        width: isSmallScreen ? '90%' : '50%',
        padding: '20px',
        margin: '16px',
        backgroundColor: '#0D121D',
        color: 'white',
        borderRadius: '15px',
      };

      const tableData = [
        { fileName: 'File1', fileSize: '10 MB', downloads: 100 },
        { fileName: 'File2', fileSize: '5 MB', downloads: 50 },
        // Add more rows as needed
      ];

    return(
        <Box>
            <SideBar/>
            <Container sx={{marginLeft: { xs: 'auto', sm: isSmallScreen ? 'auto' : 35 }}}>
                <Typography variant="h4">
                    Scan Results
                </Typography>                
                <Typography variant="p">
                    Here you can see the result of scans you done
                </Typography>
                

            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Paper elevation={3} style={commonPaperStyle}>

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <DataObjectIcon style={{ marginRight: '8px', color: 'gray' }} />
                        <Typography variant="h6">Detect Logs</Typography>
                    </div>

                    <div style={{display:"flex"}}>
                    <Alert variant="outlined" severity="success" sx={{margin:"2%"}}>
                       
                       </Alert>
                       <Alert variant="outlined" severity="info" sx={{margin:"2%"}}>
                          
                       </Alert>
                       <Alert variant="outlined" severity="warning" sx={{margin:"2%"}}></Alert>
                    </div>
                    
                    </div>
                    
                    <Typography variant="body1">
                        Detectation Logs information.
                    </Typography>
                </Paper>

                <Paper elevation={3} style={{
                    padding: '20px',
                    margin: '16px',
                    backgroundColor: '#0D121D',
                    color: 'white',
                    borderRadius: '15px',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                        <DataObjectIcon style={{ marginRight: '8px', color: 'gray' }} />
                        <Typography variant="h6">Pc information</Typography>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <Typography variant="p">
                        basic information about user's Pc
                    </Typography>
                        <Typography variant="p" sx={{ margin: '2%' }}>System: </Typography>
                        <Typography variant="p" sx={{ margin: '2%' }}>Boot time: </Typography>
                        <Typography variant="p" sx={{ margin: '2%' }}>VPN: </Typography>
                        <Typography variant="p" sx={{ margin: '2%' }}>Country: </Typography>
                        <Typography variant="p" sx={{ margin: '2%' }}>FiveM: </Typography>
                    </div>
                    
                </Paper>
                </Box>
                

                <Box sx={{display:"flex",}}>
                <Paper elevation={3} style={commonPaperStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                        <DataObjectIcon style={{ marginRight: '8px', color: 'gray' }} />
                        <Typography variant="h6">Steam accounts</Typography>
                    </div>
                    <br/>

                    
                </Paper>

                <Paper elevation={3} style={commonPaperStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                        <DataObjectIcon style={{ marginRight: '8px', color: 'gray' }} />
                        <Typography variant="h6">Mods Logs</Typography>
                    </div>
                    <br/>
                    <TableContainer sx={{color:"white"}}>
                            <Table>
                            <TableHead>
                                <TableRow sx={{color:"white"}}>
                                <TableCell sx={{color:"white"}}>File Name</TableCell>
                                <TableCell sx={{color:"white"}}>File Size</TableCell>
                                <TableCell sx={{color:"white"}}>Downloads</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{color:"white"}}>{row.fileName}</TableCell>
                                    <TableCell sx={{color:"white"}}>{row.fileSize}</TableCell>
                                    <TableCell sx={{color:"white"}}>{row.downloads}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            </Table>
                        </TableContainer>
                    
                </Paper>
                
                <Paper elevation={3} style={commonPaperStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                        <DataObjectIcon style={{ marginRight: '8px', color: 'gray' }} />
                        <Typography variant="h6">Active Recording</Typography>
                    </div>
                    <br/>
 
                </Paper>

                
                </Box>
                
            <Box sx={{display:"flex"}}>
                    <Paper elevation={3} style={commonPaperStyle}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                                <DataObjectIcon style={{ marginRight: '8px', color: 'gray' }} />
                                <Typography variant="h6">Executed Files</Typography>
                            </div>
                            
                            <div style={{display:"flex", flexDirection:"column"}}>
                                                            
                            <p> 
                            C:\Users\Username\Documents\Projects\Company\Department\Team\Project1\SourceCode
                            </p> 
                            <p> 
                            C:\Users\Username\Documents\Projects\Company\Department\Team\Project1\SourceCode
                            </p> 
                            <p> 
                            C:\Users\Username\Documents\Projects\Company\Department\Team\Project1\SourceCode
                            </p> 
                            <p> 
                            C:\Users\Username\Documents\Projects\Company\Department\Team\Project1\SourceCode
                            </p> 
                            <p> 
                            C:\Users\Username\Documents\Projects\Company\Department\Team\Project1\SourceCode
                            </p> 

                                
                            </div>
        
                </Paper>

            </Box>


            </Container>
        </Box>
    )
}