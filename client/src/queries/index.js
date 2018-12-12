import { gql } from "apollo-boost";

export const ADD_BOOK = gql`
    mutation($bookTitle: String!, $author: [String]!, $category: [String]!, $content: String!, $image: String!, $link: [String]!, $uploader: String!) {
        addBook(bookTitle: $bookTitle, author: $author, category: $category, content: $content, image: $image, link: $link, uploader: $uploader) {
            _id
            bookTitle
            author
            image
            category
            link
            uploader
        }
    }
`;