import React from 'react';

import Button from '@material-ui/core/Button';


import Header from '../headerComponent';

export default function section1() {
    return (
        <div id="section1" className="py-5">
            <Header />
            <h5 className="text-danger mt-5 mb-3">USE FOR FREE 24h/day</h5>
            <h1 className="my-3">KEEPING MEMORIES ALIVE</h1>
            <p className="mx-auto my-3" style={{width:"700px"}} ><strong>soulium.com</strong> the virtual cemetery. Here, you can create memorable sites for your loved ones free of charge, which will continue to live in your memory forever. You can also mourn together with us and exchange with other people</p>

            <div >
            <Button size="large" variant="contained" className="my-3 mx-2" color ="secondary"><strong>CREATE MEMORIAL</strong></Button>
            <Button size="large" variant="contained" className="text-white mx-2 bg-success"><strong>VIEW AN EXAMPLE</strong></Button>

            </div>
        </div>
    )
}
