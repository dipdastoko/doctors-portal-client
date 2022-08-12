import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <ExceptionalDental />
            <AppointmentBanner />
            <Testimonial />
        </div>
    );
};

export default Home;