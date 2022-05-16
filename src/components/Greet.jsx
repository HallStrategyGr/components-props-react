import React from 'react';

function Greet({ lastName, firstName }) {
    return <h2> Hello {lastName || firstName}!</h2>
}

export default Greet;