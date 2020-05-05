import React from 'react';

import { ActionButtons } from '../Universal/UniversalAdminPanel';

function EditText(props) {

    return (
        <div>
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

export default EditText;
