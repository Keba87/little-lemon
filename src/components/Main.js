import React from 'react';
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomerSay from '../components/CustomersSay';
import Chicago from './Chicago';
import Footer from './Footer';

const Main = () => {
    return (
        <main>
            <CallToAction />
            <Specials />
            <CustomerSay />
            <Chicago />
            <Footer />
        </main>
    )
}

export default Main;