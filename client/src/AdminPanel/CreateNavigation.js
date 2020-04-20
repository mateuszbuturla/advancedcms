import React from 'react';
import axios from 'axios';
import { changeElementPositionInArray } from '../Utils/Common';

import EditMainNavLink from '../Components/AdminPanel/EditMainNavLink';

class CreateNavigation extends React.Component {

    state = {
        name: '',
        links: [],
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    addLink() {
        let newLinks = this.state.links;
        newLinks.push({ type: 'navLink', text: '' })
        this.setState({ links: newLinks });
    }

    handleSelectChane(e) {
        let newLinks = this.state.links;
        newLinks[e.target.id].text = e.target.value;
        this.setState({ links: newLinks })
    }

    handleChangeElementPosition(e) {
        this.setState({ links: changeElementPositionInArray(this.state.links, e.target.id, e.target.dataset.direction) })
    }

    handleRemoveLink(e) {
        const { links } = this.state;
        let newLinks = links;

        newLinks.splice(e.target.id, 1);
        this.setState({ links: newLinks })
    }

    saveChanges() {
        const { refreshDashboard } = this.props;

        axios.post('http://localhost:4000/api/editcreatenavigation', { id: '', name: this.state.name, links: this.state.links })
            .then(response => {
                console.log(response.status)
                refreshDashboard();
            }).catch(error => {
                console.log('error')
            });
    }

    render() {
        const { links, name } = this.state;

        const elements = links.map((element, index) =>
            <EditMainNavLink
                key={index}
                handleSelectChane={this.handleSelectChane.bind(this)}
                handleChangeElementPosition={this.handleChangeElementPosition.bind(this)}
                handleRemoveLink={this.handleRemoveLink.bind(this)}
                value={element.text}
                id={index}
            />)

        return (
            <div>
                <h2>Create Navigation</h2>
                <input type="text" placeholder="Navigation name" onChange={this.handleNameChange.bind(this)} value={name} />
                <hr />
                {elements}
                <hr />
                <button onClick={this.addLink.bind(this)}>
                    Add Link
                </button>
                <button onClick={this.saveChanges.bind(this)}>
                    Save
                </button>
            </div>
        );
    }
}

export default CreateNavigation;