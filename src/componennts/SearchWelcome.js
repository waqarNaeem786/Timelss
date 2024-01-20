import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchWelcome() {
    return (
        <div>
            <Card sx={{ backgroundColor: '#6436C1', padding: 2, borderRadius: 5, marginBottom: 2, width: "auto" }}>
                <CardContent>
                    <Typography variant={'h5'} sx={{ color: 'white' }}>
                        Welcome back, Alex
                    </Typography>

                    <Typography variant={'p'} sx={{ color: 'gray' }}>
                        Get a little overview about your account
                    </Typography>

                    <Typography variant={'p'} sx={{ color: 'white' }}>
                        Your subscription status is <Typography sx={{ color: '#04A24C' }}>Active</Typography>
                    </Typography>
                </CardContent>
            </Card>

                <Card sx={{ backgroundColor: '#121926', padding: 2, borderRadius: 5, width: "auto" }}>
                <CardContent>
                    <Typography variant={'h5'} sx={{ color: 'white' }}>
                        Total Scan Count
                    </Typography>

                    <Typography variant={'p'} sx={{ color: 'gray' }}>
                        An overview of all total scans with Timeless
                    </Typography>

                    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                        <SearchIcon sx={{ color: '#6436C1', marginRight: 1 }} />
                        <Typography>
                            42.138
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
