import React from 'react';
import Button from '../components/ButtonMain';


function HomePage() {
    return (
        <div>
            <h1>HomePage</h1>
            <Button text='Reserve a table' onClickLink='/booking' />
            <Button text='Menu' onClickLink='/booking' />
        </div>
)}

export default HomePage;