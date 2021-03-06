import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main> 
        <h2>一个专注于学习的计时器</h2>
        <div style={{color:"#ccc"}}>下载地址</div>
        <p>安卓v1.0.1：<a href={"https://menhechuanghb.com/zikaoquan.apk"}>点击下载</a></p>
        <p>苹果v1.0.0：<a>开发中...</a></p>
    </main>
  );
}

export default App;
