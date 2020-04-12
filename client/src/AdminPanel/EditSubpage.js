import React from 'react';
import axios from 'axios';
import { changeElementPositionInArray } from '../Utils/Common';

import EditText from '../Components/AdminPanel/EditText';

class EditSubpage extends React.Component {

    state = {
        name: '',
        content: [],
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

    render() {
        const { content, name } = this.state;

        const elements = content.map((element, index) =>
            <EditText
                key={index}
                handleChangeText={this.handleChangeText.bind(this)}
                handleChangeElementPosition={this.handleChangeElementPosition.bind(this)}
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
            </div>
        );
    }
}

export default EditSubpage;