import React from 'react';
import styledConfig from '../../../../config/styledComponentsConfig';

import { ActionButtons, FieldTypeText, EditElementPageHeader } from '../../Styled/UniversalAdminPanel';

function EditPageHeader(props) {

    return (
        <div>
            <FieldTypeText value="Header" />
            <EditElementPageHeader config={styledConfig} onChange={props.handleChangeText} value={props.value} id={props.id} />
            <ActionButtons
                handleChangeElementPosition={props.handleChangeElementPosition}
                handleRemoveElement={props.handleRemoveElement}
                id={props.id}
            />
        </div>
    );
}

export default EditPageHeader;
