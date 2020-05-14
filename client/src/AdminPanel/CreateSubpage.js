import React from 'react';
import axios from 'axios';
import { changeElementPositionInArray, checkSubpageNameIsExist } from '../Utils/Common';
import styledConfig from '../config/styledComponentsConfig';
import pageConfig from '../config/pageConfig';

import { PageHeader } from '../Components/Universal/Universal';
import { ChangeNameInput, Line, EditMenu } from '../Components/Universal/UniversalAdminPanel';

import EditElement from '../Components/AdminPanel/EditElement';

class CreateSubpage extends React.Component {

    state = {
        name: '',
        content: [],
        nameIsExist: false,
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    addField(e) {
        let newContent = this.state.content;
        newContent.push({ type: e.target.attributes.getNamedItem('data-fieldType').value, text: '', elements: [] })
        this.setState({ content: newContent });
    }

    handleChangeText(e) {
        let newContent = this.state.content;
        newContent[e.target.id].text = e.target.value;
        this.setState({ content: newContent })
    }

    handleChangeElementPosition(e) {
        this.setState({ content: changeElementPositionInArray(this.state.content, e.target.id, e.target.dataset.direction) })
    }

    handleRemoveElement(e) {
        const { content } = this.state;
        let newContent = content;

        newContent.splice(e.target.id, 1);
        this.setState({ content: newContent })
    }

    handleChangeElementInComponent(newElements, parentid) {
        let newContent = this.state.content;
        newContent[parentid].elements = newElements;
        this.setState({ content: newContent })
    }

    saveChanges() {
        const { refreshDashboard } = this.props;

        checkSubpageNameIsExist(this.state.name)
            .then((isExist) => {
                this.setState({ nameIsExist: isExist })
                if (!isExist) {
                    axios.post('http://localhost:4000/api/editcreatesubpage', { name: this.state.name, content: this.state.content })
                        .then(response => {
                            console.log(response.status)
                            refreshDashboard();
                        }).catch(error => {
                            console.log('error')
                        });
                }
            });
    }

    render() {
        const { content, name, nameIsExist } = this.state;

        const elements = content.map((element, index) =>
            <EditElement
                key={index}
                elementType={element.type}
                handleChangeText={this.handleChangeText.bind(this)}
                handleChangeElementPosition={this.handleChangeElementPosition.bind(this)}
                handleRemoveElement={this.handleRemoveElement.bind(this)}
                handleChangeElementInComponent={(newElements, parentid) => this.handleChangeElementInComponent(newElements, parentid)}
                value={element.text}
                elements={element.elements}
                id={index}
            />)

        return (
            <div>
                <PageHeader config={styledConfig}>Create Subpage</PageHeader>
                <ChangeNameInput config={styledConfig} type="text" placeholder="Subpage name" onChange={this.handleNameChange.bind(this)} value={name} />
                {nameIsExist === true && <p>The name already exists</p>}
                <Line config={styledConfig} />
                {elements}
                <Line config={styledConfig} />
                <EditMenu pageConfig={pageConfig.createSubpage.editButtons} addField={this.addField.bind(this)} saveChanges={this.saveChanges.bind(this)} />
            </div>
        );
    }
}

export default CreateSubpage;