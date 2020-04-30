import React, { useState } from 'react';

function EditList(props) {

    const [listElements, setListElements] = useState([]);

    const addField = () => {
        setListElements([...listElements, { value: '' }])
    }

    const handleFieldChange = (e) => {
        let newList = listElements;
        newList[e.target.id].value = e.target.value;
        setListElements([...newList])
    }

    let listElementsRender = listElements.map((element, index) =>
        <li key={index}>
            <input type="text" id={index} value={element.value} onChange={handleFieldChange} />
        </li>)

    return (
        <div>
            <p>List</p>
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
