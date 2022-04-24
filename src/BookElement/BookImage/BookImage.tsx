import React from 'react';
import "./BookImage.css"
import {BookDescriptionType} from "../../state/state";

type BookImagePropsType ={
    image:string
}
const BookImage = (props:BookImagePropsType) => {
    return (
        <div>
            <img src={props.image}  className="book_img"/>
        </div>
    );
};

export default BookImage;