import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ActionButtons } from '../Universal/UniversalAdminPanel';

function EditMainNavLink(props) {

    const [subpages, setSubpages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/getallsubpages')
            .then(response => {
                setSubpages(response.data.subpages)
            }).catch(error => {
                console.log('error')
            });
    }, [])

    const subpagesOptions = subpages.map((subpage, index) => {
        return (
            <option key={index} value={subpage.name}>
                {subpage.name}
            </option>
        )
    })

    return (
        <div>
            <select onChange={props.handleSelectChane} value={props.value} id={props.id} name="subpageSelect">
                <option value="homepage">Home Page</option>
                {subpagesOptions}
            </select>
            <ActionButtons
                handleChangeElementPosition={props.handleChangeElementPosition}
                handleRemoveElement={props.handleRemoveElement}
                id={props.id}
            />
        </div>
    );
}

export default EditMainNavLink;
