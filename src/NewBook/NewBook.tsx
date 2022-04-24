import React, {ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState} from 'react';
import "./NewBook.css"
import {BookDescriptionType} from "../state/state";

type NewBookPropsType = {
    setBooks: Dispatch<SetStateAction<BookDescriptionType[]>>;
    setShowForm: Dispatch<SetStateAction<boolean>>
    books: BookDescriptionType[]
    editForm: number


}


const NewBook = (props: NewBookPropsType) => {

    const createBook = () => {
        props.setBooks((prevState: Array<BookDescriptionType>) => {
            return [...prevState, book];
        })
    }

    const saveBook = () => {
        props.setBooks((prevState: Array<BookDescriptionType>) => {
            //const bookEdit = [...prevState]
            return prevState.map(b => {
                if (b.id == props.editForm) {
                    return book
                }
                return b
            })

        })
    }

    const change = (e: ChangeEvent<HTMLInputElement>): void => {
        setBook((prevState: BookDescriptionType) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            };
        })
    }

    let accessButtonName = "Добавить"

    let initState: BookDescriptionType = {
        title: "",
        description: "",
        data: "",
        id: 8,
        isDone: true,
        image: ""
    };

    if (props.editForm) {
        initState = props.books.find(b => b.id == props.editForm) || initState;
        accessButtonName = "Сохранить"
    }


    const [book, setBook] = useState(initState);

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (props.editForm) {
                    saveBook()
                } else {
                    createBook()
                }

                props.setShowForm(false)
            }
            }>
                <h3>Редактирование книги</h3>
                <p>
                    <label className="book_label">Наименование</label>
                    <input type="text" placeholder="привет" value={book.title} onChange={change} name="title"/>
                </p>
                <p>
                    <label className="book_label">Автор</label>
                    <input placeholder="Кайл Симпсон" onChange={change} value={book.description} name="description"/>
                </p>
                <p>
                    <label className="book_label">Год выпуска</label>
                    <input placeholder="2017" onChange={change} name="data" value={book.data}/>
                </p>
                <p>
                    <label className="book_label">Изображение</label>
                    <input placeholder="https://" value={book.image} onChange={change} name="image"/>
                </p>
                <div>
                    <input type="submit"
                           value={accessButtonName}
                           className="button"
                           name="add"
                    />
                    <input type="button"
                           value="Отменить"
                           className="button"
                           name="cancel"
                           onClick={() => props.setShowForm(false)}/>
                </div>
            </form>
        </div>
    );
};

export default NewBook;
