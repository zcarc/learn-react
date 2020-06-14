import React, { useReducer } from "react";

function reducer(state, action) {
    console.log('action: ', action);
    console.log("action.name: ", action.name);
    console.log("action.value: ", action.value);

    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    })

    const {name, nickname} = state;

    const onChange = e => {
        console.log("e.target: ", e.target);
        console.log("typeof e.target.name: ", typeof e.target.name);
        dispatch(e.target);
    }

    return (
      <div>
        <div>
          <input name="name" value={name} onChange={onChange} />
          <input name="nickname" value={nickname} onChange={onChange} />
        </div>
        <div>
          <div>
            <b>이름:</b> {name}
          </div>
          <div><b>닉네임: </b>{nickname}</div>
        </div>
      </div>
    );
}

export default Info;