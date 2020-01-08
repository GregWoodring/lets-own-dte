import React from 'react';

import './Banner.scss';

const Banner = props => {

    return (
        <div className='banner-body'>
            <h1 className='banner-title'>
                Let's Own DTE
            </h1>

            <p className='banner-text'>
                It's time to take Ann Arbor's power into public ownership.
            </p>

            <button className='banner-button'>
                Let's Own DTE
            </button>
        </div>
    )

}

export default Banner;