import React from 'react';
import axios from 'axios';
import { changeElementPositionInArray } from '../../Utils/Common';
import PageElementsType from '../../Utils/PageElementTypes';
import styledConfig from '../../config/styledComponentsConfig';
import pageConfig from '../../config/pageConfig';

import { PageHeader } from '../../Components/Universal/Universal';
import { Line, EditMenu } from '../../Components/Universal/UniversalAdminPanel';

import EditElement from '../../Components/common/EditElement/EditElement';

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

    addField(e) {
        let newLinks = this.state.links;
        newLinks.push({ type: e.target.attributes.getNamedItem('data-fieldType').value, text: '' })
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

    handleRemoveElement(e) {
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
                elementType={element.type}
                handleSelectChane={this.handleSelectChane.bind(this)}
                handleChangeElementPosition={this.handleChangeElementPosition.bind(this)}
                handleRemoveElement={this.handleRemoveElement.bind(this)}
                value={element.text}
                id={index}
            />)

        return (
            <div>
                <PageHeader config={styledConfig}>Edit Main Nav</PageHeader>
                <Line config={styledConfig} />
                {elements}
                <Line config={styledConfig} />
                <EditMenu pageConfig={pageConfig.mainNav.editButtons} addField={this.addField.bind(this)} saveChanges={this.saveChanges.bind(this)} />
            </div>
        );
    }
}

export default EditMainNav;