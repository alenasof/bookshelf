import React from 'react';
import "./TitleInput.css"

type TitleInputPropsType = {
    setShowForm: (value: boolean) => void
}


const TitleInput = (props: TitleInputPropsType) => {

    return (
        <div>
            <input type="button"
                   value="Добавить"
                   className="input_title"
                   onClick={() => props.setShowForm(true)}
            />
        </div>
    )
};

export default TitleInput;