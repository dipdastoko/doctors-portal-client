import { Grid, Paper, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (

        <Container sx={{ textAlign: 'left' }}>
            <Typography sx={{ mt: 10, color: 'info.main', fontWeight: 500 }} variant='h5'>
                TESTIMONIAL
            </Typography>
            <br />
            <Typography sx={{ mb: 5 }} variant='h4'>
                What Our Patients Says
            </Typography>

            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 1 }} elevation={12}>
                        <Typography variant='body1' sx={{ textAlign: 'justify', p: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur labore repellat similique sapiente ea, tempora atque impedit in, iste magnam voluptatum aperiam, sit corrupti? Doloribus tempore iure suscipit optio!
                        </Typography>

                        <Box style={{ display: "flex", justifyContent: "center" }} >
                            <img src={people1} alt="" />
                            <Typography sx={{ my: 3, ml: 2, color: "info.main" }} variant='body2'>
                                Winson Herry <br />California
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 1 }} elevation={12}>
                        <Typography variant='body1' sx={{ textAlign: 'justify', p: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur labore repellat similique sapiente ea, tempora atque impedit in, iste magnam voluptatum aperiam, sit corrupti? Doloribus tempore iure suscipit optio!
                        </Typography>

                        <Box style={{ display: "flex", justifyContent: "center" }} >
                            <img src={people2} alt="" />
                            <Typography sx={{ my: 3, ml: 2, color: "info.main" }} variant='body2'>
                                Winson Herry <br />California
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 1 }} elevation={12}>
                        <Typography variant='body1' sx={{ textAlign: 'justify', p: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur labore repellat similique sapiente ea, tempora atque impedit in, iste magnam voluptatum aperiam, sit corrupti? Doloribus tempore iure suscipit optio!
                        </Typography>

                        <Box style={{ display: "flex", justifyContent: "center" }} >
                            <img src={people3} alt="" />
                            <Typography sx={{ my: 3, ml: 2, color: "info.main" }} variant='body2'>
                                Winson Herry <br />California
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>


            </Grid>
        </Container>

    );
};

export default Testimonial;