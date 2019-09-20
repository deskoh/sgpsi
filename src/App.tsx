import React, { useEffect, useState } from 'react';

import { ReadingService } from './Feathers';
import Reading from './components/Reading';
import { ReactComponent as GitHubIcon } from './github.svg';
import './App.css';

const App: React.FC = () => {
  const [value, setValue] = useState(0);
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    const cb = (reading: any) => {
      setValue(reading.value);
      setCreatedAt(reading.createdAt);
    };
    ReadingService.on('created', cb);

    fetch(`${process.env.REACT_APP_API_ENDPOINT}reading/1`)
      .then((response) => response.json())
      .then(({ data }) => {
        if (data[0]) {
          setValue(data[0].value);
          setCreatedAt(data[0].createdAt);
        }
    });

    return () => {
      ReadingService.removeListener('created', cb)
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Reading value={value} updatedAt={createdAt} />
      </header>
      <footer className="App-footer">
        <a
          className="App-link"
          href="https://github.com/deskoh/sgpsi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="App-logo" />
          Source
        </a>
      </footer>
    </div>
  );
}

export default App;
