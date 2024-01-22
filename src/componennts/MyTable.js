import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemIcon  from '@mui/material/ListItemIcon';

const teamData = [
    { memberName: 'John Doe', email: 'john@example.com', lastActive: '2022-01-01', dateCreated: '2021-12-01', status: 'Active' },
    { memberName: 'Jane Smith', email: 'jane@example.com', lastActive: '2022-02-15', dateCreated: '2021-11-15', status: 'Inactive' },
    { memberName: 'Bob Johnson', email: 'bob@example.com', lastActive: '2022-03-20', dateCreated: '2022-01-20', status: 'Active' },
    { memberName: 'Alice Brown', email: 'alice@example.com', lastActive: '2022-04-10', dateCreated: '2021-10-10', status: 'Active' },
    { memberName: 'Charlie Wilson', email: 'charlie@example.com', lastActive: '2022-05-05', dateCreated: '2022-02-05', status: 'Inactive' },
];

export default function MyTable() {
    return (
        <TableContainer component={Paper} sx={{ backgroundColor: '#0D121D', marginTop: 2, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
            <Typography variant="h5" sx={{ color: 'white', padding: 2 }}>
                My Team
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: 'gray' }}>Member Name</TableCell>
                        <TableCell sx={{ color: 'gray' }}>Email</TableCell>
                        <TableCell sx={{ color: 'gray' }}>Last Active</TableCell>
                        <TableCell sx={{ color: 'gray' }}>Date Created</TableCell>
                        <TableCell sx={{ color: 'gray' }}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teamData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell sx={{ color: 'white' }}>
                                <ListItemIcon>
                                    <AccountCircleIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                {row.memberName}
                            </TableCell>
                            <TableCell sx={{ color: 'white' }}>{row.email}</TableCell>
                            <TableCell sx={{ color: 'white' }}>{row.lastActive}</TableCell>
                            <TableCell sx={{ color: 'white' }}>{row.dateCreated}</TableCell>
                            <TableCell sx={{ color: 'red', fontWeight: 'bold' }}>{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
