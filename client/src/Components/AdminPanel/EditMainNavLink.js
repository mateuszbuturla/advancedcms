import React, { useEffect } from 'react';

function EditMainNavLink(props) {

    return (
        <div>
            <select onChange={props.handleChangeText} value={props.value} id={props.id} name="subpageSelect">

            </select>
            <button id={props.id} data-direction='up' onClick={props.handleChangeElementPosition}>UP</button>
            <button id={props.id} data-direction='down' onClick={props.handleChangeElementPosition}>DOWN</button>
        </div>
    );
}

export default EditMainNavLink;
