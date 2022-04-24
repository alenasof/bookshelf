import React, {Dispatch, MouseEventHandler, SetStateAction} from 'react';
import {BookDescriptionType} from "../../state/state";

type BookInputDeletePropsType = {
    id: number
    setBooks: Dispatch<SetStateAction<BookDescriptionType[]>>
}


const BookInputDelete = (props: BookInputDeletePropsType) => {

    const deleteBook: MouseEventHandler<HTMLInputElement> = (e) => {
        props.setBooks((currentBooks) => {
            return currentBooks.filter(b => b.id !== props.id)
        })
    }


    return (
        <div>
            <input type="button"
                   value="Удалить"
                   className="input_list"
                   onClick={deleteBook}
            />
        </div>
    );
};

export default BookInputDelete;