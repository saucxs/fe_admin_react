import React, {useEffect, useState} from 'react';

const Count = (props: any) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `你点击${count}次`;
  });
  // 点击函数
  const add = () => {
    setCount(count + 1);
  };
  // 你可以在这使用 Hook
  return (
    <div>
      <p>点击{count}次</p>
      <button onClick={add}>点我</button>
    </div>
  );
}

export default Count;
