import React, {useState} from 'react';
import './App.css';
import Header from "./Header/Header";
import TitleInput from "./TitleInput/TitleInput";
import BookElement from "./BookElement/BookElement";
import {BookDescriptionType} from "./state/state";
import NewBook from "./NewBook/NewBook";

type AppPropsType = {
    state: BookDescriptionType[];
}

function App(props: AppPropsType) {
    const [books, setBooks] = useState(props.state);
    const [isShowForm, setShowForm] = useState(false);
    const [editForm, setEditForm] = useState(0);



    let bookList = books.map((book: BookDescriptionType) => {
        return (
            <BookElement book={book}
                         setBooks={setBooks}
                         setShowForm={setShowForm}
                         setEditForm={setEditForm}/>
        )
    })



    return (
        <div className="App">
            <Header/>
            <TitleInput setShowForm={setShowForm}/>
            {
                isShowForm
                    ? (
                        <NewBook
                            setBooks={setBooks}
                            setShowForm={setShowForm}
                            books={books}
                            editForm={editForm}
                        />)
                    : bookList
            }
        </div>

    );
}

export default App;
