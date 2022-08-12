import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png';

const ExceptionalDental = () => {
    return (
        <Container>
            <Grid sx={{ mt: 15 }} container spacing={2}>

                <Grid item xs={12} md={5}>
                    <img style={{ width: "320px", height: "400px" }} src={treatment} alt="" />
                </Grid>
                <Grid style={{ textAlign: 'left' }} item xs={12} md={7}>
                    <Typography sx={{ mt: 4 }} variant='h4' style={{ fontWeight: 500 }}>
                        Exceptional Dental Care, On Your Terms
                    </Typography>
                    <Typography sx={{ my: 4 }} variant='body1' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corrupti incidunt eaque amet mollitia est totam consectetur corporis excepturi harum, alias, assumenda beatae. Vel suscipit perferendis ullam eligendi incidunt expedita esse quod corrupti obcaecati omnis. Molestias repellat molestiae architecto, repudiandae illo odit vel illum quo. Esse, laboriosam! Doloribus distinctio itaque dolorum, eos, provident sunt ipsum, animi nam architecto enim temporibus.</Typography>
                    <Button variant='contained'> Learn More</Button>
                </Grid>
            </Grid>
        </Container>

    );
};

export default ExceptionalDental;