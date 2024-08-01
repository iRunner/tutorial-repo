import useFetch from 'use-http'

import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('')

  const [books, setBooks] = useState([])




  const { get, post, loading, error, data = [], cache } = useFetch(`http://localhost:3000/article`)



  useEffect(() => {
    cache.delete()
    get()
  }, [])

  useEffect(() => {
    // @ts-ignore
    data && Array.isArray(data) && setBooks(data)
  }, [data])

  const submitNewBook = () => {
    post({
      title: newTitle,
      body: newBody,
    }).then(() => {
      cache.clear();
      get();
    })

    setNewTitle('')
    setNewBody('')
  }


  return (
    <>
      <div>{loading ? 'loading...' : 'not loading'}</div>
      <input value={newTitle} name='title' onChange={e => setNewTitle(e.target.value)} />
      <input value={newBody} name='title' onChange={e => setNewBody(e.target.value)} />
      <button onClick={submitNewBook} >Submit Book!</button>
     <p></p>
      <p></p>
      <p></p>
      <p>{ error && error.message }</p>

      {
        books && Array.isArray(books) && books.map((article: any) => {
          return (<div>{article.title}</div>)
        })
      }

      <button onClick={() => {
        cache.clear();
        get();
      }}>Refetch</button>

    </>
  )
}

export default App
