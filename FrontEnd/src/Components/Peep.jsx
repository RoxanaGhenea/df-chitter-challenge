import React from 'react';
import '../ComponentsCss/Peep.css';

const Peep = ({ displayName, text, image, avatar, date }) => {
    return (
        <>
            <div className="peep d-flex justify-content-center my-3">
                <div className='peep-body d-flex'>
                    <div className='peep-header me-2'>
                        <div className='me-2'>
                            <img className="avatar-peep" src={ avatar } alt="Your Image" />
                        </div>
                    </div>
                    <div>
                        <div className="d-flex">
                            <h3>{ displayName }</h3>
                            <p>{ date }</p>
                        </div>
                        <p>{ text }</p>
                        <img src={image} alt="Your image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Peep;