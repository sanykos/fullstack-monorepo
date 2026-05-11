import { useEffect, useState } from 'react';
import { type MessageResponse } from '@fullstack-todolist/shared';

import './App.css';

function App() {
  const [data, setData] = useState<MessageResponse | null>(null);

  useEffect(() => {
    // Запрос идет к Vite Dev Server, который перенаправит его на Express
    fetch('/api/message')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.error(err);
        setData(null);
      });
  }, []);

  // console.log('data', data);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Проверка Monorepo</h1>
      <div
        style={{
          padding: '20px',
          border: '1px solid #ccc',
          display: 'inline-block',
        }}
      >
        <strong>Ответ сервера:</strong>
        <p>{data?.message}</p>
      </div>
    </div>
  );
}

export default App;
