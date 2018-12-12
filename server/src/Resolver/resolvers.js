import BookModel from '../Models/Book';
let splitArray = (obj) => {                
    return obj.toString().split(",").map((value) => {
        return [value.trim()];
    });
}

const resolvers = {
    Query: {
        getBooks: async () => {
            return await BookModel.find({}).sort([['like', -1]]);
        },
        getOneBook: async (root, { id }) => {
            return await BookModel.findOne({ _id: id });
        },
        getBookByAuthor: async (root, { author }) => {
            return await BookModel.find({ author: author }).sort([['like', -1]]);
        },
        getBookByCategory: async (root, { category }) => {
            return await BookModel.find({ category: category }).sort([['like', -1]]);
        }
    },
    Mutation: {
        addBook: async (root, { bookTitle, author, category, image, content, link, uploader }) => {
            const Book = await new BookModel({ bookTitle: bookTitle, author: splitArray(author), category: splitArray(category), content: content, image: image, link: splitArray(link), uploader: uploader });
            return Book.save();
        },
        updateBook: async (root, { id, bookTitle, author, category, image, content, link, uploader }) => {
            return await BookModel.findOneAndUpdate({ _id: id }, { bookTitle: bookTitle, author: author, category: category, content: content, image: image, link: link, uploader: uploader });
        },
        deleteBook: async (root, { id }) => {
            return await BookModel.findOneAndDelete({ _id: id });
        },
        updateLike: async (root, { id }) => {             
            await BookModel.update({ _id: id }, {$inc: { like: 1 }});
            return BookModel.findOne({ _id: id });
        }
    }
};

export default resolvers;