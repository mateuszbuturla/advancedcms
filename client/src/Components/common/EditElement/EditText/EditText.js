import React from 'react';
import styledConfig from '../../../../config/styledComponentsConfig';

import { ActionButtons, FieldTypeText, EditElementTextarea } from '../../../Universal/UniversalAdminPanel';

function EditText(props) {

    return (
        <div>
            <FieldTypeText value="Text" />
            <EditElementTextarea config={styledConfig} onChange={props.handleChangeText} value={props.value} id={props.id} />
            <ActionButtons
                handleChangeElementPosition={props.handleChangeElementPosition}
                handleRemoveElement={props.handleRemoveElement}
                id={props.id}
            />
        </div>
    );
}

export default EditText;
