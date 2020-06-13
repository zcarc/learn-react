import React, {useReducer} from 'react';

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "CHANGE_NAME":
      return { name: state.name + "123" };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0, name:'hslee' });

  console.log('state: ', state);

  return (
    <div>
      <p>
        현재 카운터 값은<b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <div>이름:{state.name}</div>
      <br />
      <button onClick={() => dispatch({ type: "CHANGE_NAME" })}>
        이름 변경
      </button>
    </div>
  );
};

export default Counter;