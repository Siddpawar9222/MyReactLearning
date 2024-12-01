import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';


const Modules = () => {
    const projects = ["RMS", "NMS", "PMS"];

    const cardStyles = {
        width: 250,
        cursor: 'pointer',
        border: '1px solid',
        borderColor: 'grey.300',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            boxShadow: 6,
            transform: 'scale(1.05)',
        },
    };

    const handleClick = (projectName) => {
        console.log(`Navigating to ${projectName}`);
    };
    return (
        <Box sx={{ p: 4 }}>
            {/* Heading */}
            <Typography variant="h5" gutterBottom>
                Explore Our Modules
            </Typography>

            {/* Cards */}
            <Grid container spacing={3}>
                {projects.map((project, index) => (
                    <Grid item key={index}>
                        <Card sx={cardStyles} onClick={() => handleClick(project)}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {project}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>

    );
};

export default Modules;
