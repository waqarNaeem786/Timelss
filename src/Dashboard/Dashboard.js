import SideBar from "../componennts/SideBar";
import Progress from "../componennts/Progress";
import SearchWelcome from "../componennts/SearchWelcome";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Table from "../componennts/MyTable";
import { Box, useTheme, useMediaQuery } from "@mui/material";

export default function Dashboard(){
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return(
            <Box>
                    <SideBar />

                <Container sx={{ paddingTop: 4, display:"flex", flexDirection:"column", marginLeft: { xs: 'auto', sm: isSmallScreen ? 'auto' : 35 },}}>
                    <Typography variant={'h4'} sx={{ color: 'white', padding: 4 }}>
                        Dashboard
                    </Typography>

                    <Grid container spacing={8}>

                        <Grid item xs={12} md={12} lg={6}>
                            <Progress />
                        </Grid>

                        <Grid item xs={12} md={12} lg={6}>
                            <SearchWelcome />
                        </Grid>

                        <Grid item xs={12} md={12} lg={12}>
                            <Table />
                        </Grid>

                        
                    </Grid>
                </Container>

            </Box>
                
    )
}