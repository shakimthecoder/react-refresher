import React from 'react';

export const CardList = (props) => {
    console.log(props);
    console.log(props.children);
    return(<div>{props.children}</div>)}