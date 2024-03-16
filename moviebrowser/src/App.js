import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/Home';
import AboutView from './components/About';
import MovieView from './components/MovieView'
import { Routes, Route } from 'react-router-dom';
import SearchView from './components/SearchView';
import PageNotFound from './components/PageNotFound';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  
  useEffect(() => {
    console.log(searchText + " is the search text")
    if (searchText) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=88bf0cd902f36038dd9f145dc9a9d57c&
           language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setSearchResults(data.results)
    })
  }
}, [searchText])

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/"  
               element={<HomeView />} />
        <Route path="about" 
               element={<AboutView />} />
        <Route path="search" 
               element= {<SearchView 
                          keyword={searchText} 
                          searchResults={searchResults}/>} />
        <Route path="/movies/:id" element ={<MovieView />} />
        <Route path="*" element = {<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;