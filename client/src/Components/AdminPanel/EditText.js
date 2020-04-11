import React from 'react';

function EditText(props) {

    return (
        <div>
            <textarea onChange={props.handleChangeText} value={props.text} id={props.id}>

            </textarea>
        </div>
    );
}

export default EditText;
