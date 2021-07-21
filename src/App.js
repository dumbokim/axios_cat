
import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [getUrl, setGetUrl] = useState('');

  useEffect(() => {
  
    axios.get('https://aws.random.cat/meow').then((url)=> {
      setGetUrl(url.data.file);
      console.log(url.data);
    })

  }, [])

  const refresh = () => {

    axios.get('https://aws.random.cat/meow').then((url)=> {
      setGetUrl(url.data.file);
      console.log(url.data);
    })

  }


  return (
    <div className="App">
      <img src={getUrl} alt='cat'/>
      <button onClick={refresh}>refresh</button>
    </div>
  );
}

export default App;
