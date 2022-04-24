import React, {Dispatch, SetStateAction, useState} from 'react';
import "./BookElement.css"
import BookImage from "./BookImage/BookImage";
import BookDescription from "./BookDescription/BookDescription";
import BookInputDelete from "./BookInput/BookInputDelete";
import BookInputEdit from "./BookInput/BookInputEdit";
import state, {BookDescriptionType} from "../state/state";

type BookElementPropsType = {
    book: BookDescriptionType
    setBooks: Dispatch<SetStateAction<BookDescriptionType[]>>
    setShowForm: Dispatch<SetStateAction<boolean>>
    setEditForm: Dispatch<SetStateAction<number>>
}


const BookElement = (props: BookElementPropsType) => {

    return (
        <div className="book_container">
            <BookImage image={props.book.image}/>
            <div className="book_inner">
                <BookDescription
                    {...props.book}
                />
            </div>
            <div className="book_input">
                <BookInputEdit id={props.book.id}
                               setBooks={props.setBooks}
                               setShowForm={props.setShowForm}
                               setEditForm={props.setEditForm}/>
                <BookInputDelete id={props.book.id}
                                 setBooks={props.setBooks}/>
            </div>
        </div>
    );
};

export default BookElement;