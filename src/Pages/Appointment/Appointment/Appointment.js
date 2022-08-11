import React from 'react';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    return (
        <div>
            <Navigation />
            <AppointmentHeader />
            <AvailableAppointment />
        </div>
    );
};

export default Appointment;