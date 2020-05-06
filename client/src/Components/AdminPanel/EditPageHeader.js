import React from 'react';

import { ActionButtons, FieldTypeText } from '../Universal/UniversalAdminPanel';

function EditPageHeader(props) {

    return (
        <div>
            <FieldTypeText value="Header" />
            <textarea onChange={props.handleChangeText} value={props.value} id={props.id}>

            </textarea>
            <ActionButtons
                handleChangeElementPosition={props.handleChangeElementPosition}
                handleRemoveElement={props.handleRemoveElement}
                id={props.id}
            />
        </div>
    );
}

export default EditPageHeader;
