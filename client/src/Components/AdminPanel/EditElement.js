import React, { useEffect, useState } from 'react';
import PageElementsType from '../../Utils/PageElementTypes';
import styledConfig from '../../config/styledComponentsConfig';

import { EditElementContainer } from '../Universal/UniversalAdminPanel';

import EditText from './EditText';
import EditMainNavLink from './EditMainNavLink';
import EditPageHeader from './EditPageHeader';
import EditLink from './EditLink';
import EditList from './EditList';

function EditElement(props) {

    const elementType = props.elementType;

    return (
        <EditElementContainer config={styledConfig}>
            {elementType === PageElementsType.TEXT &&
                <EditText
                    handleChangeText={props.handleChangeText}
                    handleChangeElementPosition={props.handleChangeElementPosition}
                    handleRemoveElement={props.handleRemoveElement}
                    value={props.value}
                    id={props.id}
                />
            }
            {elementType === PageElementsType.MAINNAVLINK &&
                <EditMainNavLink
                    handleSelectChane={props.handleSelectChane}
                    handleChangeElementPosition={props.handleChangeElementPosition}
                    handleRemoveLink={props.handleRemoveLink}
                    value={props.value}
                    id={props.id}
                />
            }
            {elementType === PageElementsType.PAGEHEADER &&
                <EditPageHeader
                    handleChangeText={props.handleChangeText}
                    handleChangeElementPosition={props.handleChangeElementPosition}
                    handleRemoveElement={props.handleRemoveElement}
                    value={props.value}
                    id={props.id}
                />
            }
            {elementType === PageElementsType.LINK &&
                <EditLink
                    handleChangeText={props.handleChangeText}
                    handleChangeElementPosition={props.handleChangeElementPosition}
                    handleRemoveElement={props.handleRemoveElement}
                    value={props.value}
                    id={props.id}
                />
            }
            {elementType === PageElementsType.LIST &&
                <EditList
                    handleChangeText={props.handleChangeText}
                    handleChangeElementPosition={props.handleChangeElementPosition}
                    handleRemoveElement={props.handleRemoveElement}
                    handleChangeElementInComponent={props.handleChangeElementInComponent}
                    value={props.value}
                    elements={props.elements}
                    id={props.id}
                />
            }
        </EditElementContainer>
    );
}

export default EditElement;
