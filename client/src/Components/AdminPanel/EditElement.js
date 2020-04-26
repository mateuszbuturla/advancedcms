import React, { useEffect, useState } from 'react';
import PageElementsType from '../../Utils/PageElementTypes';

import EditText from './EditText';
import EditMainNavLink from './EditMainNavLink';

function EditElement(props) {

    const elementType = props.elementType;

    return (
        <>
            {elementType === PageElementsType.TEXT && <EditText />}
            {elementType === PageElementsType.MAINNAVLINK &&
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
