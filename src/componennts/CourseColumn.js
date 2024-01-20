import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MonitorIcon from '@mui/icons-material/Monitor';
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CodeIcon from '@mui/icons-material/Code';

export default function CourseColumn() {
  return (
    <Container sx={{ paddingY: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Card sx={{ borderRadius: 2, width: '100%' }}>
            <CardContent sx={{ backgroundColor: "#FF1A5B" }}>
              <MonitorIcon sx={{ color: "white" }} />
              <Typography variant="h6" sx={{ color: "white" }}>
                No-Code Platform Design
              </Typography>
              <Typography variant="p" sx={{ color: "white" }}>
                12 projects
              </Typography>
            </CardContent>

            <CardContent>
              <Typography variant="p">21 students</Typography>
              <Box sx={{ marginTop: "10px" }}>
                <AccountCircleIcon />
                <AccountCircleIcon />
                <AccountCircleIcon />
              </Box>

              <Box sx={{ width: '100%' }}>
                <LinearProgress
                  variant="determinate"
                  value={50}
                  sx={{ width: '100%', marginTop: '16px' }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Card sx={{ borderRadius: 2, width: '100%' }}>
            <CardContent sx={{ backgroundColor: "#4741FF" }}>
              <CodeIcon sx={{ color: "white" }} />
              <Typography variant="h6" sx={{ color: "white" }}>
                Code for no-coders
              </Typography>
              <Typography variant="p" sx={{ color: "white" }}>
                12 projects
              </Typography>
            </CardContent>

            <CardContent>
              <Typography variant="p">21 students</Typography>
              <Box sx={{ marginTop: "10px" }}>
                <AccountCircleIcon />
                <AccountCircleIcon />
                <AccountCircleIcon />
              </Box>

              <Box sx={{ width: '100%' }}>
                <LinearProgress
                  variant="determinate"
                  value={50}
                  sx={{ width: '100%', marginTop: '16px' }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
