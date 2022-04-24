import React from 'react';
import state, {BookDescriptionType} from "../../state/state";




const BookDescription = (props: BookDescriptionType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.data}</p>
        </div>
    );
};

export default BookDescription;