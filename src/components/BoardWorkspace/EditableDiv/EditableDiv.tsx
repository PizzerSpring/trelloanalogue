import React, {useState} from 'react';
import styled from 'styled-components';

const AddCardTitle = styled.div`
  cursor: pointer;
  display: inline-block;
  color: #5e6c84;
`

type EditableDivPropsType = {
    createTask: (title: string) => void
}

const EditableDiv = (props: EditableDivPropsType) => {
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState('');
        return edit ? <><input
                onBlur={() => {
            //setEdit(false);
            }}
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }
                }
                type="text" placeholder="Введите заголовок" value={value}/>
                <span onClick={() => {
                setEdit(false)
                    props.createTask(value);

                }
                }>Добавить</span></>
            :
                <AddCardTitle onClick={() => {
                    setEdit(true);
                }
                }>
                    Добавить карточку
                </AddCardTitle>
};

export default EditableDiv;