import mongoose from 'mongoose';
import uuid from 'node-uuid';

const Schema = mongoose.Schema;

const Book = new Schema({
    _id: { type: String, default: uuid.v1 },
    bookTitle: String,
    author: [String],
    category: [String],
    image: String,
    content: String,
    image: String,
    like: Number,
    link: [String],
    uploader: String
});

const model = mongoose.model('book', Book);
export default model;