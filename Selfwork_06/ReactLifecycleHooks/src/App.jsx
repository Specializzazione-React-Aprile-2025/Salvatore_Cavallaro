import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './hooks/useFetch';
import Card from './components/Card';

function App() {
  
  const [queryInput, setQueryInput] = useState('');
  const [url, setUrl] = useState('');
  const data = useFetch(url);
  
  
  const handleSubmission = (event) => {
    event.preventDefault();
    setUrl(`https://gutendex.com/books?search=${queryInput}`);
  }
  
  
  return (
    <>
    <form onSubmit={handleSubmission}>
      <label htmlFor="search">Cerca Libro</label>
      <input
      id='search'
      type="text"
      value={queryInput}
      onChange={(e) => setQueryInput(e.target.value)} />

      <button type='submit'>Cerca</button>
    </form>
    <ul>
          {data.map((book, index) => (
            <Card book={book}></Card>
            
          ))}
        </ul>
    </>
  )
}

export default App
