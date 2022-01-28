import React from 'react';

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://cn.i.cdn.ti-platform.com/content/343/showpage/historias-corrientes/es/regularshow-200x200.png)'
            }}
        ></div>

        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                Un nuevo dia
            </p>
            <p className='journal__entry-content'>
                un poco de contenido que hay de img
            </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  );
};
