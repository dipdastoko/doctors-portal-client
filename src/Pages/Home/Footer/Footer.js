import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import footerBg from '../../../images/footer-bg.png'

const Footer = () => {
    const footerBack = {
        backgroundImage: `url(${footerBg})`,
        backgroundSize: '100%'
    }
    return (
        <div style={footerBack}>
            <Container sx={{ p: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant='h5' sx={{ color: 'info.main', fontWeight: 500 }}>
                            Services
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Emergency Dental Care
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Checkup
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Treatment of Personal Disease
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Tooth Extraction
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Check Up
                        </Typography><br />
                    </Grid>

                    <Grid item xs={4}>
                        <Typography variant='h5' sx={{ color: 'info.main', fontWeight: 500 }}>
                            Oral Health
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Emergency Dental Care
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Checkup
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Treatment of Personal Disease
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Tooth Extraction
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Check Up
                        </Typography><br />
                    </Grid>

                    <Grid item xs={4}>
                        <Typography variant='h5' sx={{ color: 'info.main', fontWeight: 500 }}>
                            Our Address
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Emergency Dental Care
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Checkup
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Treatment of Personal Disease
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Tooth Extraction
                        </Typography><br />
                        <Typography variant='body1' sx={{ color: 'GrayText' }}>
                            Check Up
                        </Typography><br />
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
};

export default Footer;