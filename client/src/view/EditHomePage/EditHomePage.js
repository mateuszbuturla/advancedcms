import React from 'react';
import axios from 'axios';
import { changeElementPositionInArray } from '../../Utils/Common';
import styledConfig from '../../config/styledComponentsConfig';
import pageConfig from '../../config/pageConfig';

import { PageHeader } from '../../Components/common/Styled/Universal';
import { Line, EditMenu } from '../../Components/common/Styled/UniversalAdminPanel';

import EditElement from '../../Components/common/EditElement/EditElement';

class EditHomePage extends React.Component {

    state = {
        content: [],
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/gethomepage')
            .then(response => {
                this.setState({ content: response.data.homePage.elements })
            }).catch(error => {
                console.log('error')
            });
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
        axios.post('http://localhost:4000/api/edithomepage', { content: this.state.content })
            .then(response => {
                console.log(response.status)
            }).catch(error => {
                console.log('error')
            });
    }

    render() {
        const { content } = this.state;

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
                <PageHeader config={styledConfig}>Edit Home Page</PageHeader>
                <Line config={styledConfig} />
                {elements}
                <Line config={styledConfig} />
                <EditMenu pageConfig={pageConfig.homePage.editButtons} addField={this.addField.bind(this)} saveChanges={this.saveChanges.bind(this)} />
            </div>
        );
    }
}

export default EditHomePage;