import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function YourCourses() {
    return (
        <Container>
        <Paper style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor:"#0D121D", borderTopLeftRadius:"20px",borderTopRightRadius:"20px" }}>
            <div>
                <Typography variant={"h5"} sx={{color:"white"}}>
                    Your Courses
                </Typography>
                <p style={{color:"white"}}>Below you will find a summary of courses</p>
            </div>

            <div>
                <Button
                    variant={'contained'}
                    color="primary"
                    style={{ backgroundColor: '#FF1A5B', }}
                >
                    <AddIcon />
                    Add Course
                </Button>
            </div>
        </Paper>
    </Container>
    );
}
