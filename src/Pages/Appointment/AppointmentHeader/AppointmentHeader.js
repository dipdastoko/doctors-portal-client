import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Home/Shared/Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;