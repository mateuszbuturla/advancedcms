import React from 'react';
import styledConfig from '../../../../config/styledComponentsConfig';

import { ActionButtons, FieldTypeText, EditElementLink } from '../../Styled/UniversalAdminPanel';

function EditLink(props) {

    return (
        <div>
            <FieldTypeText value="Link" />
            <EditElementLink config={styledConfig} type="text" onChange={props.handleChangeText} value={props.value} id={props.id} />
            <ActionButtons
                handleChangeElementPosition={props.handleChangeElementPosition}
                handleRemoveElement={props.handleRemoveElement}
                id={props.id}
            />
        </div>
    );
}

export default EditLink;
