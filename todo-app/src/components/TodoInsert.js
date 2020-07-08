import React, {useCallback, useState} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    console.log('TodoInsert');
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue(''); // value 값 초기화

        e.preventDefault();
    }, [onInsert, value]);

    return (
        <form className={"TodoInsert"} onSubmit={onSubmit}>
            <input placeholder={"할 일을 입력하세요"}
                   value={value}
                   onChange={onChange}/>
            <button type={"submit"}>
                {/*react-icons 페이지에서 원하는 아이콘 이름을 찾아서 불러옴*/}
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;