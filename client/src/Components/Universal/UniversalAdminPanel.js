import React from 'react';
import styled from 'styled-components';
import styledConfig from '../../config/styledComponentsConfig';
import PageElementsType from '../../Utils/PageElementTypes';

import upIcon from '../../img/up.png';
import downIcon from '../../img/down.png';
import removeIcon from '../../img/remove.png';
import headerIcon from '../../img/header.png';
import textIcon from '../../img/text.png';
import linkIcon from '../../img/link.png';
import listIcon from '../../img/list.png';
import saveIcon from '../../img/save.png';

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
    padding-top: 10px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: ${props => props.config.transition};

    &:hover {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
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
        border-top-right-radius: ${props => props.config.borderRadius};
        border-bottom-right-radius: ${props => props.config.borderRadius};
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

export const EditElementPageHeader = styled.input`
    width: 100%;
    border: 1px solid transparent;
    outline: none;
    font-size: ${props => props.config.pageHeaderFontSize.small};
    color: ${props => props.config.themeColor};
    transition: ${props => props.config.transition};

    @media (min-width: ${props => props.config.breakPoints.medium})
    {
        font-size: ${props => props.config.pageHeaderFontSize.medium};
    }

    @media (min-width: ${props => props.config.breakPoints.big})
    {
        font-size: ${props => props.config.pageHeaderFontSize.big};
    }
`;

export const EditElementTextarea = styled.textarea`
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    border: 1px solid transparent;
    outline: none;
    font-size: ${props => props.config.textFontSize.small};
    color: ${props => props.config.mainColor};
    transition: ${props => props.config.transition};

    @media (min-width: ${props => props.config.breakPoints.medium})
    {
        font-size: ${props => props.config.textFontSize.medium};
    }

    @media (min-width: ${props => props.config.breakPoints.big})
    {
        font-size: ${props => props.config.textFontSize.big};
    }
`;

export const EditElementLink = styled.input`
    width: 100%;
    border: 1px solid transparent;
    outline: none;
    font-size: ${props => props.config.pageHeaderFontSize.small};
    color: ${props => props.config.themeColor};
    transition: ${props => props.config.transition};

    @media (min-width: ${props => props.config.breakPoints.medium})
    {
        font-size: ${props => props.config.textFontSize.medium};
    }

    @media (min-width: ${props => props.config.breakPoints.big})
    {
        font-size: ${props => props.config.textFontSize.big};
    }
`;

export const ActionButtons = (props) => {

    const Container = styled.div`
        position: absolute;
        background-color: #fff;
        border: 1px solid black;
        top: 0px;
        right: 0px;
        transform: translateY(-50%);
        opacity: 0;
        transition: ${props => props.config.transition} opacity;

        ${EditElementContainer}:hover & {
            opacity: 1;
        }
    `;

    const Img = styled.img`
        margin-left: 5px;
        width: 25px;
        height: 25px;
        cursor: pointer;
    `;

    return (
        <Container config={styledConfig}>
            <Img src={upIcon} id={props.id} data-direction='up' onClick={props.handleChangeElementPosition} />
            <Img src={downIcon} id={props.id} data-direction='down' onClick={props.handleChangeElementPosition} />
            <Img src={removeIcon} id={props.id} onClick={props.handleRemoveElement} />
        </Container >
    );
}

export const EditMenu = (props) => {

    const Container = styled.div`
        margin-top: ${props => props.config.marginTop.small};
    `;

    const Img = styled.img`
        width: 35px;
        height: 35px;
        cursor: pointer;
    `;

    return (
        <Container config={styledConfig}>
            {props.pageConfig.addHeader &&
                <Img src={headerIcon} onClick={props.addField} data-fieldType={PageElementsType.PAGEHEADER} />}
            {props.pageConfig.addText &&
                <Img src={textIcon} onClick={props.addField} data-fieldType={PageElementsType.TEXT} />}
            {props.pageConfig.addLink &&
                <Img src={linkIcon} onClick={props.addField} data-fieldType={PageElementsType.LINK} />}
            {props.pageConfig.addMainNavLink &&
                <Img src={linkIcon} onClick={props.addField} data-fieldType={PageElementsType.MAINNAVLINK} />}
            {props.pageConfig.addList &&
                <Img src={listIcon} onClick={props.addField} data-fieldType={PageElementsType.LIST} />}
            {props.pageConfig.save &&
                <Img src={saveIcon} onClick={props.saveChanges} />}
            {props.pageConfig.remove &&
                <Img src={removeIcon} onClick={props.removeSubpage} />}
        </Container>
    );
}