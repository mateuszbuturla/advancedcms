import React from 'react';

function EditText(props) {

    return (
        <div>
            <textarea onChange={props.handleChangeText} value={props.value} id={props.id}>

            </textarea>
            <button id={props.id} data-direction='up' onClick={props.handleChangeElementPosition}>UP</button>
            <button id={props.id} data-direction='down' onClick={props.handleChangeElementPosition}>DOWN</button>
        </div>
    );
}

export default EditText;
