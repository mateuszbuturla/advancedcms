import React from 'react';

function EditPageHeader(props) {

    return (
        <div>
            <p>Header</p>
            <textarea onChange={props.handleChangeText} value={props.value} id={props.id}>

            </textarea>
            <button id={props.id} data-direction='up' onClick={props.handleChangeElementPosition}>UP</button>
            <button id={props.id} data-direction='down' onClick={props.handleChangeElementPosition}>DOWN</button>
            <button id={props.id} onClick={props.handleRemoveElement}>REMOVE</button>
        </div>
    );
}

export default EditPageHeader;
