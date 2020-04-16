import React from 'react';
import axios from 'axios';
import { changeElementPositionInArray } from '../Utils/Common';

import EditMainNavLink from '../Components/AdminPanel/EditMainNavLink';

class EditMainNav extends React.Component {

    state = {
        links: [],
    }

    addLink() {
        let newLinks = this.state.links;
        newLinks.push({ type: 'text', text: '' })
        this.setState({ links: newLinks });
    }

    handleChangeText(e) {
        let newLinks = this.state.links;
        newLinks[e.target.id].text = e.target.value;
        this.setState({ links: newLinks })
    }

    handleChangeElementPosition(e) {
        this.setState({ links: changeElementPositionInArray(this.state.links, e.target.id, e.target.dataset.direction) })
    }

    render() {
        const { links } = this.state;

        const elements = links.map((element, index) =>
            <EditMainNavLink
                key={index}
                handleChangeText={this.handleChangeText.bind(this)}
                handleChangeElementPosition={this.handleChangeElementPosition.bind(this)}
                value={element.text}
                id={index}
            />)

        return (
            <div>
                <h2>Edit Main Nav</h2>
                <hr />
                {elements}
                <hr />
                <button onClick={this.addLink.bind(this)}>
                    Add Link
                </button>
            </div>
        );
    }
}

export default EditMainNav;