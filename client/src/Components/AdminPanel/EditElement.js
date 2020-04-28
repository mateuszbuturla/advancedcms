import React, { useEffect, useState } from 'react';
import PageElementsType from '../../Utils/PageElementTypes';

import EditText from './EditText';
import EditMainNavLink from './EditMainNavLink';

function EditElement(props) {

    const elementType = props.elementType;

    return (
        <>
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
            {elementType === PageElementsType.NAVLINK &&
                <EditMainNavLink
                    handleSelectChane={props.handleSelectChane}
                    handleChangeElementPosition={props.handleChangeElementPosition}
                    handleRemoveLink={props.handleRemoveLink}
                    value={props.value}
                    id={props.id}
                />
            }
        </>
    );
}

export default EditElement;
