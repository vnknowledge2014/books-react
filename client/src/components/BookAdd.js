import React, { Component } from 'react';
import Modal from './Modal';
import Input from './Input';
import Button from './Button';
import { Mutation } from 'react-apollo';
import { ADD_BOOK } from '../queries';

const initialState = {
    bookTitle: "",
    image: "",    
    author: "",
    content: "",
    category: "",
    link: "",
    uploader: "",
};

class BookAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };
        this.handleChange = this.handleChange.bind(this);
    }

    getUploader = (uploader) => {
        return uploader = this.props.username;
    }
    
    validateForm = () => {
        const {
            bookTitle,
            image,            
            author,
            content,
            category,
            link,
        } = this.state;
        const isInValid = !bookTitle || !author || !content || !image || !category || !link;
        return isInValid;
    }

    handleChange = event => { 
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event, addBook) => {
        event.preventDefault();
        await addBook();
        await this.setState(initialState);
        console.log(this.state);
    }

    render() {
        const {
            bookTitle,
            image,
            author,
            content,
            category,
            link,
            uploader
        } = this.state;
        
        return (
            <Mutation mutation={ADD_BOOK} variables={{ bookTitle, image, author, content, category, link, uploader }}>
                {
                    (addBook, { data, loading, error }) => {
                        return (
                            <Modal modalState={this.props.modalState} eventOnSubmit={event => this.handleSubmit(event, addBook)} children={[
                                <><Input classStyles={"input is-info"} typeInput={"text"} name={"bookTitle"} placeholder={"Book Title..."} onChangeEvent={this.handleChange} value={bookTitle}/>
                                <Button classStyles={"delete"} eventOnClick={this.props.closeModal}/></>, 
                                <>
                                <div className="content">
                                    <ul className="remove-bullet-style">
                                <li><header className="title">Cover Image:</header><Input classStyles={"input is-info"} typeInput={"text"} name={"image"} placeholder={"Image Link..."} onChangeEvent={this.handleChange} value={image}/></li>
                                        <li><header className="title">Author:</header><Input classStyles={"input is-info"} typeInput={"text"} name={"author"} placeholder={"Authors - separate each author name by comma"} onChangeEvent={this.handleChange} value={author}/></li>
                                        <li>
                                        <header className="title">Content:</header>
                                        <textarea name="content" className="textarea is-primary" placeholder="Primary textarea" onChange={this.handleChange} defaultValue={content}/>
                                        </li>
                                        <li>
                                        <header className="title">Category Tag:</header>
                                        <Input classStyles={"input is-info"} typeInput={"text"} name={"category"} placeholder={"Category tag - separate each tag by comma"} onChangeEvent={this.handleChange} value={category}/>
                                        </li>
                                        <li>
                                        <header className="title">link:</header>
                                        <Input classStyles={"input is-info"} typeInput={"text"} name={"link"} placeholder={"Links - separate each link by comma"} onChangeEvent={this.handleChange} value={link}/>
                                        </li>
                                        <li>
                                        <header className="title">Uploader: <span className="tag is-light" name="uploader">{this.handleChange && this.getUploader(uploader)}</span></header>
                                        </li>
                                    </ul>
                                </div>
                                </>, 
                                <><Button classStyles={"button is-success is-rounded"} content={"Add"} disabledEvent={loading || this.validateForm()}/>
                                <Button classStyles={"button is-rounded"} eventOnClick={this.props.closeModal} content={"Cancel"}/></>]} />
                        );
                    }
                }
            </Mutation>
        );
      }
}

export default BookAdd;