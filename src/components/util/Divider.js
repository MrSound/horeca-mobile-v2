import React from 'react';

const Divider = ({ style }) => (
    <hr style={{
        display: 'block',
        height: '1px',
        border: '0',
        borderTop: '1px solid #ccc',
        margin: '3px 0px',
        padding: '0',
        ...style,
    }} />
);

export default Divider;