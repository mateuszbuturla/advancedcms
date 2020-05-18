import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { changeElementPositionInArray } from '../../../../Utils/Common';
import styledConfig from '../../../../config/styledComponentsConfig';
import pageConfig from '../../../../config/pageConfig';

import EditElement from '../EditElement';

import { ActionButtons, FieldTypeText, EditElementTextarea, EditMenu } from '../../../Universal/UniversalAdminPanel';

const ListContainer = styled.ul`
    margin-left: 40px;
`;

function EditList(props) {

    const [listElements, setListElements] = useState([]);

    useEffect(() => {
        setListElements(props.elements)
    }, [])

    const addField = (e) => {
        setListElements([...listElements, { type: e.target.attributes.getNamedItem('data-fieldType').value, value: '' }])
        props.handleChangeElementInComponent([...listElements, { type: e.target.attributes.getNamedItem('data-fieldType').value, value: '' }], props.id);
    }

    const handleFieldChange = (e) => {
        let newList = listElements;
        newList[e.target.id].value = e.target.value;
        setListElements([...newList])
        props.handleChangeElementInComponent([...newList], props.id);
    }

    const handleChangeElementPosition = (e) => {
        setListElements([...changeElementPositionInArray(listElements, e.target.id, e.target.dataset.direction)])
        props.handleChangeElementInComponent([...changeElementPositionInArray(listElements, e.target.id, e.target.dataset.direction)], props.id);
    }

    const removeField = (e) => {
        let newList = listElements;
        newList.splice(e.target.id, 1);
        setListElements([...newList])
        props.handleChangeElementInComponent([...newList], props.id);
    }

    let listElementsRender = listElements.map((element, index) =>
        <li key={index}>
            <EditElement
                key={index}
                elementType={element.type}
                handleChangeText={handleFieldChange}
                handleChangeElementPosition={handleChangeElementPosition}
                handleRemoveElement={removeField}
                value={element.value}
                id={index}
            />
        </li>)

    return (
        <div>
            <FieldTypeText value="List" />
            <EditElementTextarea config={styledConfig} type="text" onChange={props.handleChangeText} value={props.value} id={props.id} />
            <ListContainer>
                {listElementsRender}
            </ListContainer>
            <EditMenu pageConfig={pageConfig.list.editButtons} addField={addField} ContainerShowOnHover={true} />
            <ActionButtons
                handleChangeElementPosition={props.handleChangeElementPosition}
                handleRemoveElement={props.handleRemoveElement}
                id={props.id}
            />
        </div>
    );
}

export default EditList;
