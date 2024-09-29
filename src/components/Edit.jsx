import React, { useState, createRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from './Text';
import '../components/Edit.css';
import { exportComponentAsJPEG } from 'react-component-export-image';

function Edit() {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();
  const imgStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '35rem',
    objectFit: 'cover',
  };

  const addText = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="edit-container">
      <div ref={memeRef} className="meme" style={{ overflow: 'auto', height: '40rem', position: 'relative' }}>
        <img src={params.get('url')} alt="Meme" style={imgStyle} />
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <Text key={index} />
          ))}
      </div>
      <div className="button-container">
        <button className="success-button" onClick={addText}>
          Add a Text
        </button>
        <button className="success-button" onClick={() => exportComponentAsJPEG(memeRef)}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Edit;
