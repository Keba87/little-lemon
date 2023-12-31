import React from 'react';
import './styles/CallToAction.css';
import Button from './ButtonMain';

const CallToAction = () => {
    return (
        <section className='callToActionSection'>
            <div className='container'>
                <div className='callToAction'>
                    <h1 className='restName'>Little Lemon</h1>
                    <h3 className='restCity'>Chicago</h3>
                    <p className='restDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    <Button text='Reserve a table' onClickLink='/booking' />
                </div>
                <img className='heroImg' src={require('../assets/restauranfood.jpg')} alt=''/>
            </div>
        </section>
    );
};

export default CallToAction;
