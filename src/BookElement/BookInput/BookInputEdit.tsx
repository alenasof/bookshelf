import React, {Dispatch, MouseEventHandler, SetStateAction} from 'react';
import {BookDescriptionType} from "../../state/state";

type BookInputEditPropsType = {
    id: number
    setBooks: Dispatch<SetStateAction<BookDescriptionType[]>>
    setShowForm: Dispatch<SetStateAction<boolean>>
    setEditForm: Dispatch<SetStateAction<number>>
}

const BookInputEdit = (props: BookInputEditPropsType) => {

    const editBook: MouseEventHandler<HTMLInputElement> = (e) => {
        props.setShowForm(true)
        props.setEditForm(props.id)
    }

    return (
        <div>
            <input type="button"
                   value="Редактировать"
                   className="input_list"
                   onClick={editBook}/>

        </div>
    );
};

export default BookInputEdit;