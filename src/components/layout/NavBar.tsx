import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';

const NavBar: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <IconButton ><Link to="/" style={{ textDecoration: 'none', color: 'white' }}> Home</Link></IconButton>
                    <IconButton color="inherit" ><Link to="/forecast" style={{ textDecoration: 'none', color: 'white' }}> Forecast</Link></IconButton>
                    <IconButton><Link to="/result" style={{ textDecoration: 'none', color: 'white' }}>  Result </Link></IconButton>
                    <IconButton><Link to="/analysis" style={{ textDecoration: 'none', color: 'white' }}> Anaylsis </Link></IconButton>
                </Toolbar>
            </AppBar>
        </Box>

    );
};

export default NavBar;