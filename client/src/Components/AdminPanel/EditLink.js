import React from 'react';

import { ActionButtons, FieldTypeText } from '../Universal/UniversalAdminPanel';

function EditLink(props) {

    return (
        <div>
            <FieldTypeText value="Link" />
            <input type="text" onChange={props.handleChangeText} value={props.value} id={props.id} />
            <ActionButtons
                handleChangeElementPosition={props.handleChangeElementPosition}
                handleRemoveElement={props.handleRemoveElement}
                id={props.id}
            />
        </div>
    );
}

export default EditLink;
