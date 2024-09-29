import React, { useEffect, useState } from 'react';
import { getMemes } from './API/API';
import './App.css';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMemes()
      .then((memes) => {
        setData(memes.data.memes);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className='Header'>
    <h1>MemePalette</h1>
    <p className="steps"><span>Browse</span>, <span>Edit</span>, <span>Save</span></p>
    </div>
      <div className="layout">
        {data.map((el) => (
          <Card key={el.id} img={el.url} title={el.name} />
        ))}
      </div>
    </>
  );
}

export default App;