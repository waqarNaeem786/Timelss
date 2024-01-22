import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Progress() {
    return (
        <div>
            <Paper square={false} sx={{ backgroundColor: '#0D121D', padding: 2, borderRadius: 5, height: 280 }}>
                <Typography variant={'h5'} sx={{ color: 'white' }}>
                    Scan Summary
                </Typography>

                <Typography variant={'p'} sx={{ color: 'gray' }}>
                    An overview of your scans
                </Typography>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, width: "auto" }}>

                    <div style={{ width: 150, height: 150 }}>
                        <CircularProgressbar
                            value={58}
                            text={"58%"}
                            styles={buildStyles({
                                strokeLinecap: 'round',
                                // Colors
                                pathColor: `rgba(226, 35, 3)`,
                                textColor: 'white',
                                trailColor: '#212C36',
                                backgroundColor: '#3e98c7',
                                textSize: '20px', // Adjust text size
                            })}
                        />
                    </div>

                    <div style={{ width: 150, height: 150 }}>
                        <CircularProgressbar
                            value={23}
                            text={"23%"}
                            styles={buildStyles({
                                strokeLinecap: 'round',
                                // Colors
                                pathColor: `rgba(224, 154, 0)`,
                                textColor: 'white',
                                trailColor: '#212C36',
                                textSize: '20px',
                            })}
                        />
                    </div>

                    <div style={{ width: 150, height: 150 }}>
                        <CircularProgressbar
                            value={19}
                            text={"19%"}
                            styles={buildStyles({
                                strokeLinecap: 'round',
                                // Colors
                                pathColor: `rgba(16, 218, 46)`,
                                textColor: 'white',
                                trailColor: '#212C36',
                                backgroundColor: '#3e98c7',
                                textSize: '20px',
                            })}
                        />
                    </div>

                </div>
            </Paper>
        </div>
    );
}
