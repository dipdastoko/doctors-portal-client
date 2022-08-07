import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150

}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <img style={{ width: '400px', marginTop: '-110px' }} src={doctor} alt="" />
                </Grid>
                <Grid xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography sx={{ mb: 5 }} style={{ color: '#42DD53' }} variant='h6'>
                            Appointment
                        </Typography>
                        <Typography style={{ color: 'white' }} variant='h4'>
                            Make an Appointment Today
                        </Typography>
                        <Typography sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }} variant='h6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur pariatur quibusdam atque ducimus adipisci. Magni est consequatur itaque quo rem?
                        </Typography>
                        <Button variant='contained'>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;