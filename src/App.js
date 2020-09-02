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
        <div>安卓v1.0：<a href={"https://menhechuanghb.com/zikaoquanv1.0.apk"}>点击下载</a></div>
        <div>安卓v1.0：<a>开发中...</a></div>
    </main>
  );
}

export default App;
