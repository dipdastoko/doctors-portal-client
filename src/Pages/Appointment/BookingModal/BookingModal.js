import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking;
    const { user } = useAuth();

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookSubmit = e => {
        e.preventDefault();
        // collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        // send data to the server
        console.log(appointment);

        handleBookingClose();

    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookSubmit}>
                        <TextField
                            hiddenLabel
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="filled-hidden-label-small"
                            defaultValue={time}
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            hiddenLabel
                            sx={{ width: '90%', m: 1 }}
                            id="filled-hidden-label-small"
                            name="patientName"
                            defaultValue={user.displayName}
                            onBlur={handleOnBlur}
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            hiddenLabel
                            sx={{ width: '90%', m: 1 }}
                            id="filled-hidden-label-small"
                            name="email"
                            defaultValue={user.email}
                            onBlur={handleOnBlur}
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            hiddenLabel
                            sx={{ width: '90%', m: 1 }}
                            id="filled-hidden-label-small"
                            name="phone"
                            defaultValue="Your Phone"
                            onBlur={handleOnBlur}
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            hiddenLabel
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="filled-hidden-label-small"
                            defaultValue={date.toDateString()}
                            variant="filled"
                            size="small"
                        />
                        <Button type='submit' variant='contained'>Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;