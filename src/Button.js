import React from 'react';

export default (selected, onClick, children) => (
    <button {...{ className: selected ? 'off' : 'on', onClick } }>
        { children }
    </button>
);
