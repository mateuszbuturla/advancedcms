import React from 'react';
import axios from 'axios';
import { changeElementPositionInArray } from '../Utils/Common';
import PageElementsType from '../Utils/PageElementTypes';

import EditElement from '../Components/AdminPanel/EditElement';

class EditNavigation extends React.Component {

    state = {
        navigation: null,
        name: '',
        links: [],
    }

    componentDidMount() {
        this.getNavigationData();
    }

    componentDidUpdate() {
        const id = this.props.match.params.id;
        if (id !== this.state.navigation._id) {
            this.getNavigationData();
        }
    }

    getNavigationData() {
        const id = this.props.match.params.id;
        axios.post('http://localhost:4000/api/getnavigationbyid', { id: id })
            .then(response => {
                console.log(response.data)
                if (response.data.navigation.length > 0) {
                    this.setState({ navigation: response.data.navigation[0], name: response.data.navigation[0].name, links: response.data.navigation[0].links })
                }
                else {
                    this.props.history.push('/dashboard/createnavigation');
                }
            }).catch(error => {
                console.log('error')
            });
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

        axios.post('http://localhost:4000/api/editcreatenavigation', { id: this.state.navigation._id, name: this.state.name, links: this.state.links })
            .then(response => {
                console.log(response.status)
                refreshDashboard();
            }).catch(error => {
                console.log('error')
            });
    }

    removeNavigation() {
        const { refreshDashboard } = this.props;

        axios.post('http://localhost:4000/api/removenaviation', { id: this.state.navigation._id })
            .then(response => {
                refreshDashboard();
            }).catch(error => {
                console.log('error')
            });
    }

    render() {
        const { links, name } = this.state;

        const elements = links.map((element, index) =>
            <EditElement
                key={index}
                elementType={PageElementsType.NAVLINK}
                handleSelectChane={this.handleSelectChane.bind(this)}
                handleChangeElementPosition={this.handleChangeElementPosition.bind(this)}
                handleRemoveLink={this.handleRemoveLink.bind(this)}
                value={element.text}
                id={index}
            />)

        return (
            <div>
                <h2>Edit Navigation</h2>
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
                <button onClick={this.removeNavigation.bind(this)}>
                    Remove
                </button>
            </div>
        );
    }
}

export default EditNavigation;