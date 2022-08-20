import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import Calender from '../../../Home/Shared/Calender/Calender';
import Appointments from '../../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} md={6}>
                <Appointments date={date} />
            </Grid>

        </Grid>
    );
};

export default DashboardHome;