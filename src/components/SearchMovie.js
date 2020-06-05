import React, { useState } from 'react'



function SearchMovie() {


  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault()


    const url = 'https://api.themoviedb.org/3/search/movie'



    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <form
        data-test='component-search-box'
        className='form'
        onSubmit={searchMovies}>

        <label
          data-test='movie-name-text'
          className='label'
          htmlFor='query'>Movie Name
        </label>

        <input
          data-test='input-value'
          className="input"
          type='text'
          name='query'
          placeholder='i.e Superman'
          value={query} onChange={(e) => setQuery(e.target.value)}
        />

        <button
          data-test='search-movies-button'
          className="button"
          type="submit">
          Search
        </button>


      </form>
    </>
  )
}

export default SearchMovie