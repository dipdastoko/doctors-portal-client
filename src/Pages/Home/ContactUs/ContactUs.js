import { Button, Typography } from '@mui/material';
import React from 'react';
import appointmentbg from '../../../images/appointment-bg.png';
const contactBg = {
    backgroundImage: `url(${appointmentbg})`,
    backgroundSize: 'auto 100%',
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '100px'
}
const ContactUs = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div style={contactBg}>
            <Typography variant='h5' sx={{ color: 'info.main', fontWeight: 600, p: 2 }}>
                CONTACT US
            </Typography>
            <Typography variant='h4' sx={{ color: 'white', fontWeight: 400 }}>
                Always Connect With Us
            </Typography>
            <br />
            <form onSubmit={handleSubmit}>
                <input style={{ width: "400px", height: "40px" }} type="text" name="" id="" placeholder='     Email Address*' />
                <br />
                <br />
                <input style={{ width: "400px", height: "40px" }} type="text" name="" id="" placeholder='     Subject*' />
                <br />
                <br />
                <textarea style={{ width: "400px" }} name="" id="" cols="30" rows="10" placeholder='  Your Message*'></textarea>
                <br />
                <br />
                <Button type='submit' variant='contained'>Submit</Button>
            </form>


        </div>
    );
};

export default ContactUs;