import React from 'react';
import axios from 'axios';
import { changeElementPositionInArray } from '../Utils/Common';
import PageElementsType from '../Utils/PageElementTypes';

import EditElement from '../Components/AdminPanel/EditElement';

class EditMainNav extends React.Component {

    state = {
        links: [],
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/getmainNav')
            .then(response => {
                this.setState({ links: response.data.mainNav.elements })
            }).catch(error => {
                console.log('error')
            });
    }

    addLink() {
        let newLinks = this.state.links;
        newLinks.push({ type: PageElementsType.MAINNAVLINK, text: '' })
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
        axios.post('http://localhost:4000/api/editmainnav', { content: this.state.links })
            .then(response => {
                console.log(response.status)
            }).catch(error => {
                console.log('error')
            });
    }

    render() {
        const { links } = this.state;

        const elements = links.map((element, index) =>
            <EditElement
                key={index}
                elementType={PageElementsType.MAINNAVLINK}
                handleSelectChane={this.handleSelectChane.bind(this)}
                handleChangeElementPosition={this.handleChangeElementPosition.bind(this)}
                handleRemoveLink={this.handleRemoveLink.bind(this)}
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
                <button onClick={this.saveChanges.bind(this)}>
                    Save
                </button>
            </div>
        );
    }
}

export default EditMainNav;