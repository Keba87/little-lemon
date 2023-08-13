import React, { Fragment } from 'react';
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomerSay from '../components/CustomersSay';



function HomePage() {
    return (
        <Fragment>
            <CallToAction />
            <Specials />
            <CustomerSay />
        </Fragment>
)}

export default HomePage;