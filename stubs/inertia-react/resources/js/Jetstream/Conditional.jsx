import React from 'react';

export function Switch({ value, children }) {
    return children.find(child => child.props.matches === value)
        || children.find(child => child.props.fallback);
}

export function Case({ matches = null, fallback = false, children }) {
    return children;
}
