import React, { useState, useEffect } from 'react';

const App = props => {
  // nameとpriceのstateを作成
  // const [name, setName] = useState(props.name)
  // const [price, setPrice] = useState(props.price)
  // 外部で設定したものを次の一行でまとめて引っ張ってこれる
  const [state, setState] = useState(props)
  const { name, price } = state

  // return内のレンダリングの後で呼ばれる
  useEffect(() => {
    console.log('This is like componentDidMount');
  })

  // 空の配列を入れると最初の読み込みのとこのみ読み込まれる
  useEffect(() => {
    console.log('This is like componentDidMountwwwwwwww');
  }, [])

  // 最初のレンダリング＋nameが読み込まれる時のみ呼ばれる
  useEffect(() => {
    console.log('This is like componentDidMount of name');
  }, [name])

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
