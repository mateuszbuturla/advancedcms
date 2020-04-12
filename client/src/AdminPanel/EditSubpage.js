import React from 'react';
import axios from 'axios';

import EditText from '../Components/AdminPanel/EditText';

class EditHomePage extends React.Component {

    state = {
        content: [],
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

    render() {
        const { content } = this.state;

        const elements = content.map((element, index) =>
            <EditText
                key={index}
                handleChangeText={this.handleChangeText.bind(this)}
                value={element.text}
                id={index}
            />)

        return (
            <div>
                <h2>Edit Subpage</h2>
                <input type="text" placeholder="Subpage name" />
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

export default EditHomePage;