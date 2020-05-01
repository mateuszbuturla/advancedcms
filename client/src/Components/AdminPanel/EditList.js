import React, { useState, useEffect } from 'react';
import { changeElementPositionInArray } from '../../Utils/Common';

function EditList(props) {

    const [listElements, setListElements] = useState([]);

    useEffect(() => {
        setListElements(props.elements)
    }, [])

    const addField = () => {
        setListElements([...listElements, { value: '' }])
        props.handleChangeElementInComponent([...listElements, { value: '' }], props.id);
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
            <input type="text" id={index} value={element.value} onChange={handleFieldChange} />
            <button id={index} data-direction='up' onClick={handleChangeElementPosition}>UP</button>
            <button id={index} data-direction='down' onClick={handleChangeElementPosition}>DOWN</button>
            <button id={index} onClick={removeField}>REMOVE</button>
        </li>)

    return (
        <div>
            <p>List</p>
            <input type="text" onChange={props.handleChangeText} value={props.value} id={props.id} />
            <ul>
                {listElementsRender}
            </ul>
            <button onClick={addField}>Add field</button>
            <button id={props.id} data-direction='up' onClick={props.handleChangeElementPosition}>UP</button>
            <button id={props.id} data-direction='down' onClick={props.handleChangeElementPosition}>DOWN</button>
            <button id={props.id} onClick={props.handleRemoveElement}>REMOVE</button>
        </div>
    );
}

export default EditList;
