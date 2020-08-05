import React, { useState } from 'react';

const App = props => {
  // nameとpriceのstateを作成
  // const [name, setName] = useState(props.name)
  // const [price, setPrice] = useState(props.price)
  // 外部で設定したものを次の一行でまとめて引っ張ってこれる
  const [state, setState] = useState(props)
  const { name, price } = state

  return (
    <>
      <p>現在の{state.name}は,{state.price}円です。</p>
      <button onClick={() => setState({ ...state, price: state.price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: state.price - 1 })}>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={state.name} onChange={e => setState({ ...state, name: e.target.value })} />
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
