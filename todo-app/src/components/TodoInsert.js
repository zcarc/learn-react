import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
	return (
		<form className={"TodoInsert"}>
			<input placeholder={"할 일을 입력하세요"}/>
			<button type={"submit"}>
				{/*react-icons 페이지에서 원하는 아이콘 이름을 찾아서 불러옴*/}
				<MdAdd />
			</button>
		</form>
	);
};

export default TodoInsert;