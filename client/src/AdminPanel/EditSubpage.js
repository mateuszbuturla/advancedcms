import React from 'react';
import axios from 'axios';
import { changeElementPositionInArray, checkSubpageNameIsExist } from '../Utils/Common';
import styledConfig from '../config/styledComponentsConfig';
import pageConfig from '../config/pageConfig';

import { PageHeader } from '../Components/Universal/Universal';
import { ChangeNameInput, Line, EditMenu } from '../Components/Universal/UniversalAdminPanel';

import EditElement from '../Components/AdminPanel/EditElement';

class EditSubpage extends React.Component {

    state = {
        subpage: null,
        name: '',
        content: [],
        nameIsExist: false,
    }

    componentDidMount() {
        this.getSubpageData();
    }

    componentDidUpdate() {
        const id = this.props.match.params.id;
        if (id !== this.state.subpage._id) {
            this.getSubpageData();
        }
    }

    getSubpageData() {
        const id = this.props.match.params.id;
        axios.post('http://localhost:4000/api/getonesubpage', { id: id })
            .then(response => {
                if (response.data.subpage.length > 0) {
                    this.setState({ subpage: response.data.subpage[0], name: response.data.subpage[0].name, content: response.data.subpage[0].elements })
                }
                else {
                    this.props.history.push('/dashboard/createsubpage');
                }
            }).catch(error => {
                console.log('error')
            });
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

        const sendDataToApi = () => {
            axios.post('http://localhost:4000/api/editcreatesubpage', { id: this.state.subpage._id, name: this.state.name, content: this.state.content })
                .then(response => {
                    console.log(response.status)
                    refreshDashboard();
                }).catch(error => {
                    console.log('error')
                });
        }

        if (this.state.name !== this.state.subpage.name) {
            checkSubpageNameIsExist(this.state.name)
                .then((isExist) => {
                    this.setState({ nameIsExist: isExist })
                    if (!isExist) {
                        sendDataToApi();
                    }
                })
        }
        else {
            sendDataToApi();
        }
    }

    removeSubpage() {
        const { refreshDashboard } = this.props;

        axios.post('http://localhost:4000/api/removesubpage', { id: this.state.subpage._id })
            .then(response => {
                console.log(response.status)
                refreshDashboard();
            }).catch(error => {
                console.log('error')
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
                <PageHeader config={styledConfig}>Edit Subpage</PageHeader>
                <ChangeNameInput config={styledConfig} placeholder="Subpage name" onChange={this.handleNameChange.bind(this)} value={name} />
                {nameIsExist === true && <p>The name already exists</p>}
                <Line config={styledConfig} />
                {elements}
                <Line config={styledConfig} />
                <EditMenu pageConfig={pageConfig.editSubpage.editButtons} addField={this.addField.bind(this)} saveChanges={this.saveChanges.bind(this)} removeSubpage={this.removeSubpage.bind(this)} />
            </div>
        );
    }
}

export default EditSubpage;