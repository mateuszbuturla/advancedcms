import React from 'react';
import styled from 'styled-components';
import styledConfig from '../../config/styledComponentsConfig';

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

export const EditElementContainer = styled.div`
    position: relative;
    width: 100%;
    border-radius: ${props => props.config.borderRadius};
    border: 1px dashed transparent;
    margin-top: ${props => props.config.marginTop.small};
    padding: 0;
    transition: ${props => props.config.transition};

    &:hover {
        border: 1px dashed ${props => props.config.themeColor};
        padding: 20px 0px 10px;
    }
`;

export const FieldTypeText = (props) => {

    const Text = styled.div`
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translateY(-50%);
        background-color: ${props => props.config.mainColor};
        color: ${props => props.config.themeColor};
        padding: 2px 10px;
        border-radius: ${props => props.config.borderRadius};
        opacity: 0;
        transition: ${props => props.config.transition} opacity;

        ${EditElementContainer}:hover & {
            opacity: 1;
        }
    `;

    return (
        <Text config={styledConfig}>{props.value}</Text>
    );
}

export const ActionButtons = (props) => {

    const Container = styled.div`
        position: absolute;
        bottom: 0px;
        right: 20px;
        transform: translateY(50%);
        opacity: 0;
        transition: ${props => props.config.transition} opacity;

        ${EditElementContainer}:hover & {
            opacity: 1;
        }
    `;

    return (
        <Container config={styledConfig}>
            <button id={props.id} data-direction='up' onClick={props.handleChangeElementPosition}>UP</button>
            <button id={props.id} data-direction='down' onClick={props.handleChangeElementPosition}>DOWN</button>
            <button id={props.id} onClick={props.handleRemoveElement}>REMOVE</button>
        </Container>
    );
}