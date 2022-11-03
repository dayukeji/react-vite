import React, { useEffect, useState, useCallback } from 'react';

function Child({ callback }) {
  useEffect(() => {
    callback();
  }, [callback]);

  return <div>子组件</div>;
}

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [kw, setKw] = useState('');

  const callback = () => {
    console.log('我是callback');
  };

  return (
    <div className="App">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="请输入姓名"
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="请输入电话"
      />
      <input
        onChange={(e) => setKw(e.target.value)}
        type="text"
        placeholder="请输入关键词"
      />
      <Child callback={callback} />
    </div>
  );
}

export default App;
