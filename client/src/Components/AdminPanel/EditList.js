import React, { useState, useEffect } from 'react';
import { changeElementPositionInArray } from '../../Utils/Common';
import PageElementsType from '../../Utils/PageElementTypes';

import EditElement from '../../Components/AdminPanel/EditElement';

import { ActionButtons } from '../Universal/UniversalAdminPanel';

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
            <p>List</p>
            <input type="text" onChange={props.handleChangeText} value={props.value} id={props.id} />
            <ul>
                {listElementsRender}
            </ul>
            <button onClick={addField} data-fieldType={PageElementsType.TEXT}>
                Add Text
            </button>
            <button onClick={addField} data-fieldType={PageElementsType.LINK}>
                Add Link
            </button>
            <ActionButtons
                handleChangeElementPosition={props.handleChangeElementPosition}
                handleRemoveElement={props.handleRemoveElement}
                id={props.id}
            />
        </div>
    );
}

export default EditList;
