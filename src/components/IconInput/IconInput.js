// @flow
import React from 'react';

const IconInput = ({icon, defaultValue, value, onChange}) => {
    return (
        <div style={{display: 'flex'}}>
            {icon}
            <input style={{border: 'none', width: '100%', outline: 'none'}} type="text" value={value || defaultValue} onChange={onChange}/>
        </div>
    );
};

export default IconInput;