import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <img style={{ width: '400px' }} src={doctor} alt="" />
                </Grid>
                <Grid xs={12} md={6}>
                    <Typography variant='h6'>
                        Appointment
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;