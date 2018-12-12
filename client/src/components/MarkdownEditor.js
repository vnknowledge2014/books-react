import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

class BookDescriptionEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: null
        }
    }

    render() {
        return(
            <Markdown>
                this.state.description
            </Markdown>
        );
    }
}

module.exports = BookDescriptionEditor;