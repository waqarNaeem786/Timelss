import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';

export default function Progress() {
    return (
        <div>
            <Paper square={false} sx={{ backgroundColor: '#121926', padding: 2, borderRadius: 5, height: 280 }}>
                <Typography variant={'h5'} sx={{ color: 'white' }}>
                    Scan Summary
                </Typography>

                <Typography variant={'p'} sx={{ color: 'gray' }}>
                    An overview of your scans
                </Typography>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, width:"auto" }}>
                    <div style={{ textAlign: 'center', backgroundColor: '#121926', padding: 5, borderRadius: '50%',width:"auto" }}>
                        <CircularProgress
                            variant="determinate"
                            value={58}
                            size={80}
                            sx={{ color: '#E22303', backgroundColor: '#121926' }}
                        />
                        <Typography variant="body2" sx={{ color: 'white', marginTop: 1 }}>
                            58%
                        </Typography>
                    </div>
                    <div style={{ textAlign: 'center', backgroundColor: '#121926', padding: 5, borderRadius: '50%',width:"auto" }}>
                        <CircularProgress
                            variant="determinate"
                            value={23}
                            size={80}
                            sx={{ color: '#E09A00', backgroundColor: '#121926' }}
                        />
                        <Typography variant="body2" sx={{ color: 'white', marginTop: 1 }}>
                            23%
                        </Typography>
                    </div>
                    <div style={{ textAlign: 'center', backgroundColor: '#121926', padding: 5, borderRadius: '50%', width:"auto" }}>
                        <CircularProgress
                            variant="determinate"
                            value={19}
                            size={80}
                            sx={{ color: '#10DA2E', backgroundColor: '#121926' }}
                        />
                        <Typography variant="body2" sx={{ color: 'white', marginTop: 1 }}>
                            19%
                        </Typography>
                    </div>
                </div>
            </Paper>
        </div>
    );
}
