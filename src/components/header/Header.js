import React from 'react';
import './Header.scss';

const Header = props => {

    return (
        <header className='header'>
            <h2
                className='title'
            >Let's Own DTE</h2>

            <div className='button-nav'>
                <button className='button-empty'>The History</button>
                <button className='button-empty'>The Plan</button>
                <button className='button-filled'>JOIN</button>
            </div>
        </header>
    )
}

export default Header;