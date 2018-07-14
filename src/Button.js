import React from 'react';

export default ({ selected, children, ...props }) => (
    <a {...{ className: selected ? 'on' : 'off', ...props } }>
        { children }
    </a>
);
