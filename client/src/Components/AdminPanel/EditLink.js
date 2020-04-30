import React from 'react';

function EditLink(props) {

    return (
        <div>
            <p>Link</p>
            <input type="text" onChange={props.handleChangeText} value={props.value} id={props.id} />
            <button id={props.id} data-direction='up' onClick={props.handleChangeElementPosition}>UP</button>
            <button id={props.id} data-direction='down' onClick={props.handleChangeElementPosition}>DOWN</button>
            <button id={props.id} onClick={props.handleRemoveElement}>REMOVE</button>
        </div>
    );
}

export default EditLink;
