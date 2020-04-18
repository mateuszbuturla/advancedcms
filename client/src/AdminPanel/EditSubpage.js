import React from 'react';
import axios from 'axios';
import { changeElementPositionInArray } from '../Utils/Common';

import EditText from '../Components/AdminPanel/EditText';

class EditSubpage extends React.Component {

    state = {
        subpage: null,
        name: '',
        content: [],
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

    addText() {
        let newContent = this.state.content;
        newContent.push({ type: 'text', text: '' })
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

    saveChanges() {
        axios.post('http://localhost:4000/api/editcreatesubpage', { id: this.state.subpage._id, name: this.state.name, content: this.state.content })
            .then(response => {
                console.log(response.status)
            }).catch(error => {
                console.log('error')
            });
    }

    removeSubpage() {
        axios.post('http://localhost:4000/api/removesubpage', { id: this.state.subpage._id })
            .then(response => {
                console.log(response.status)
            }).catch(error => {
                console.log('error')
            });
    }

    render() {
        const { content, name } = this.state;

        const elements = content.map((element, index) =>
            <EditText
                key={index}
                handleChangeText={this.handleChangeText.bind(this)}
                handleChangeElementPosition={this.handleChangeElementPosition.bind(this)}
                handleRemoveElement={this.handleRemoveElement.bind(this)}
                value={element.text}
                id={index}
            />)

        return (
            <div>
                <h2>Edit Subpage</h2>
                <input type="text" placeholder="Subpage name" onChange={this.handleNameChange.bind(this)} value={name} />
                <hr />
                {elements}
                <hr />
                <button onClick={this.addText.bind(this)}>
                    Add Text
                </button>
                <button onClick={this.saveChanges.bind(this)}>
                    Save
                </button>
                <button onClick={this.removeSubpage.bind(this)}>
                    Remove
                </button>
            </div>
        );
    }
}

export default EditSubpage;