import React from 'react';
import styled from 'styled-components';

export const ChangeNameInput = styled.input`
    border: 0px;
    border-bottom: 1px solid ${props => props.config.mainColor};
    padding-bottom: 5px;
    margin-top: ${props => props.config.marginTop.small};
`;

export const Line = styled.hr`
    width: 100%;
    border: 0px;
    height: 2px;
    background-color: ${props => props.config.mainColor};
    opacity: .5;
    margin-top: ${props => props.config.marginTop.small};
`;

export const ActionButtons = (props) => {

    return (
        <div>
            <button id={props.id} data-direction='up' onClick={props.handleChangeElementPosition}>UP</button>
            <button id={props.id} data-direction='down' onClick={props.handleChangeElementPosition}>DOWN</button>
            <button id={props.id} onClick={props.handleRemoveElement}>REMOVE</button>
        </div>
    );
}